async function loadMetadata() {
    const result = await fetch('/k8s_data.json');
    return result;
}

export default loadMetadata;