const btn = document.getElementById("change");
      const text = document.getElementById("color");

      const generator = function () {
        newColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        console.log(newColor.length);
        if (newColor.length < 7) {
          generator();
        }
      };

      btn.addEventListener("click", function () {
        generator();
        document.body.style.background = newColor;
        btn.style.color = newColor;
        text.innerText = newColor;});