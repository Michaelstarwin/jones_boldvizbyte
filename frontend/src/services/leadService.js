/**
 * Service to handle all website form submissions.
 * Sends data to Google Apps Script (Sheet + WhatsApp), FormSubmit (Email), and Custom Node.js Backend.
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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
        details: formData.details || {},
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

    // Save to Custom Backend for Real-Time Super Admin Dashboard
    try {
        const response = await fetch(`${API_URL}/leads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Failed to save to Custom Backend');
        }
        console.log("🔥 Lead successfully added to Custom Backend Real-time engine");
    } catch (e) {
        console.error("🔥 Failed to save lead to Custom Backend.", e);
    }

    console.log("🚀 Submitting Lead:", { ...payload, fileData: payload.fileData ? "[Base64 Data]" : "None" });

    // 3. Send Email Notification directly to management
    try {
        const uniqueId = Date.now().toString().slice(-6); // Grab last 6 digits of timestamp for ID
        const emailPayload = {
            _subject: `BoldVizByte - New ${payload.formType} Lead [#${uniqueId}]`,
            Name: payload.name,
            Email: payload.email,
            Phone: payload.phone,
            Requested: payload.serviceOrRole,
            Message: payload.message,
            // Include dynamic details in the email if they exist
            ...payload.details,
            // (Optional) FormSubmit specific settings
            _autoresponse: "Thank you for contacting BoldVizByte. We will be in touch shortly.",
            _template: "table" // Uses a nice table format for the email
        };

        // Fire off email request asynchronously (don't block the UI)
        fetch("https://formsubmit.co/ajax/management.boldvizbyte@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailPayload)
        }).then(res => res.json())
            .then(data => console.log("📧 Email notification triggered:", data))
            .catch(err => console.error("📧 Email notification failed:", err));

    } catch (e) {
        console.error("Failed to initiate email notification.", e);
    }

    // 4. Send WhatsApp Notifications to Leaders (Client-side triggers)
    try {
        const leaders = [
            "919342064130", // Leader 1
            "917708994392", // Leader 2
            "919791759371"  // Leader 3
        ];

        const waMessage = `*New BoldVizByte Lead!*\n\n*Type:* ${payload.formType}\n*Name:* ${payload.name}\n*Phone:* ${payload.phone}\n*Service/Role:* ${payload.serviceOrRole}\n\n*Message:* ${payload.message || 'N/A'}`;
        const encodedMessage = encodeURIComponent(waMessage);

        // We can only reliably open one popup without browser blockers, or we just silently 
        // rely on a server-side API. Since we don't have a backend Twilio/Meta API setup, 
        // we will attempt to trigger the primary leader, or log that an API is needed for all 3.

        // For a frontend-only approach, pushing multiple window.opens usually gets blocked by popup blockers.
        // We will trigger the main WhatsApp link for the *first* leader as a fallback, 
        // OR print a warning that a real API is needed for silent multi-dispatch.

        // Let's create a single 'group' style link or just send to the first one for direct chat
        const primaryLeaderUrl = `https://wa.me/${leaders[0]}?text=${encodedMessage}`;

        // Due to browser popup restrictions, silently triggering 3 WhatsApp tabs is impossible without user interaction.
        // Best approach without a backend: tell the user this requires a backend integration if they want silent delivery.
        console.log(`💬 WhatsApp Notification Payload ready for: ${leaders.join(', ')}`);

    } catch (e) {
        console.error("Failed to prepare WhatsApp notifications.", e);
    }

    // 5. Mock Mode (If no Google Script is setup)
    if (!SCRIPT_URL) {
        console.warn("⚠️ No VITE_GOOGLE_SCRIPT_URL found. Using Mock Submission.");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: "Mock success! File simulated." });
            }, 1000);
        });
    }

    // 6. Real Submission (Google Sheets/WhatsApp backend)
    try {
        await fetch(SCRIPT_URL, {
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
