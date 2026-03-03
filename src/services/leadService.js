/**
 * Service to handle all website form submissions.
 * Sends data to Google Apps Script (Sheet + WhatsApp).
 */

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

// Helper to convert file to Base64
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // Get raw base64 (remove data:application/pdf;base64 prefix)
        reader.onerror = error => reject(error);
    });
};

export const submitLead = async (formData) => {
    // 1. Prepare Base Payload
    const payload = {
        formType: formData.formType || "General",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceOrRole: formData.service || formData.role || "N/A",
        message: formData.message || "",
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
    };

    // 2. Handle File Upload (if present)
    if (formData.file) {
        try {
            console.log("📂 Processing File Upload:", formData.file.name);
            payload.fileData = await fileToBase64(formData.file);
            payload.fileName = formData.file.name;
            payload.mimeType = formData.file.type;
        } catch (error) {
            console.error("❌ File Processing Error:", error);
            return { success: false, message: "Failed to process file upload." };
        }
    }

    console.log("🚀 Submitting Lead:", { ...payload, fileData: payload.fileData ? "[Base64 Data]" : "None" });

    // 3. Mock Mode
    if (!SCRIPT_URL) {
        console.warn("⚠️ No VITE_GOOGLE_SCRIPT_URL found. Using Mock Submission.");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: "Mock success! File simulated." });
            }, 1500);
        });
    }

    // 4. Real Submission
    try {
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        return { success: true, message: "Successfully submitted!" };

    } catch (error) {
        console.error("❌ Lead Submission Error:", error);
        return { success: false, message: "Failed to submit. Please try again." };
    }
};
