
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-btn');
    const contractAddress = document.getElementById('contract-address');
    const copyIcon = document.getElementById('copy-icon');
    const checkIcon = document.getElementById('check-icon');

    if (copyButton && contractAddress) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(contractAddress.textContent).then(() => {
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'inline-block';
                setTimeout(() => {
                    copyIcon.style.display = 'inline-block';
                    checkIcon.style.display = 'none';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
