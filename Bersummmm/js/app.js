const noBtn1 = document.getElementById('noBtn1');
    const yesBtn1 = document.getElementById('yesBtn1');
    const noBtn2 = document.getElementById('noBtn2');
    const yesBtn2 = document.getElementById('yesBtn2');
    const pollBox1 = document.getElementById('pollBox1');
    const pollBox2 = document.getElementById('pollBox2');
    const resultBox1 = document.getElementById('resultBox1');
    const resultBox2 = document.getElementById('resultBox2');

    // Function to move the "Hayır" button
    function moveButton(button, pollBox) {
      button.addEventListener('mouseenter', () => {
        const pollBoxRect = pollBox.getBoundingClientRect();
        const btnWidth = button.offsetWidth;
        const btnHeight = button.offsetHeight;
        const randX = Math.random() * (pollBox.clientWidth - btnWidth);
        const randY = Math.random() * (pollBox.clientHeight - btnHeight);
        button.style.position = 'absolute';
        button.style.left = randX + 'px';
        button.style.top = randY + 'px';
      });
    }

    moveButton(noBtn1, pollBox1);
    moveButton(noBtn2, pollBox2);

    yesBtn1.addEventListener('click', () => {
      pollBox1.style.display = 'none';
      pollBox2.style.display = 'block';
    });

    yesBtn2.addEventListener('click', () => {
      pollBox2.style.display = 'none';
      resultBox2.style.display = 'block';
    });