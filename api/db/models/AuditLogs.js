const mongoose = require("mongoose");

const schema = mongoose.Schema({
    level: String,
    email: String,
    location: String,
    proc_types: String,
    log: String
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class AuditLogs extends mongoose.Model {

}
schema.loadClass(AuditLogs);

module.exports = schema;
module.exports = mongoose.model("audit_logs", schema);