"use strict"

module.exports = () => process.platform === "win32" && typeof process.env.ComSpec === "string" && process.env.TERM !== "cygwin"
