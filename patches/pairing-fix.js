async function requestPairingCode(phoneNumber, options = {}) {
    try {
        return await this.requestPairingCode(phoneNumber);
    } catch (e) {
        try {
            return await this.requestPairingCode(phoneNumber, {
                pairWithPhoneNumber: true,
                timeout: 15000
            });
        } catch (e2) {
            console.log('⚠️ Fallback pairing gagal');
            throw e2;
        }
    }
}
module.exports = { requestPairingCode };
