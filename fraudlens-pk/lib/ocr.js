// This module is intentionally isolated so it can be swapped out later
// without touching any UI code.
//
// TODO(Mohsin — backend/AI pipeline integration):
// Replace the body of `extractTextFromImage` with a call to our real
// OCR/AI endpoint, e.g.:
//
//   export async function extractTextFromImage(file, onProgress) {
//     const formData = new FormData();
//     formData.append("image", file);
//     const res = await fetch("/api/ocr", { method: "POST", body: formData });
//     const { text } = await res.json();
//     return text;
//   }
//
// The function signature (file in, plain string out, optional progress
// callback) should stay exactly the same so AnalyzerForm.jsx does not
// need any changes when this swap happens.

import { createWorker } from "tesseract.js";

/**
 * Runs OCR on an uploaded image file entirely in the browser and returns
 * the extracted text. No backend required.
 *
 * @param {File} file - the uploaded screenshot (image/*)
 * @param {(percent: number) => void} [onProgress] - optional progress callback (0-100)
 * @returns {Promise<string>} extracted text
 */
export async function extractTextFromImage(file, onProgress) {
  if (!file) return "";

  const worker = await createWorker("eng", 1, {
    logger: (m) => {
      if (onProgress && m.status === "recognizing text") {
        onProgress(Math.round((m.progress || 0) * 100));
      }
    },
  });

  try {
    const {
      data: { text },
    } = await worker.recognize(file);
    return (text || "").trim();
  } finally {
    await worker.terminate();
  }
}
