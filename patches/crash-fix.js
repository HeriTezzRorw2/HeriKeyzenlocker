async function handleConnectionCrash(update) {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
        const delay = Math.min(1000 * Math.pow(2, (lastDisconnect?.attempt || 1)), 30000);
        await new Promise(r => setTimeout(r, delay));
        return true;
    }
    return false;
}
module.exports = { handleConnectionCrash };
