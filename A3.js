var canvas = document.getElementById("bugCanvas");
        var ctx = canvas.getContext("2d");
        var bugX, bugY;
        var score = 0;
        var speed = 1000; // Initial hopping interval in milliseconds
        var bugInterval;

        // Draw bug on canvas
        function drawBug() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(bugX, bugY, 20, 0, Math.PI * 2);
            ctx.fill();
        }

        // Start bug hopping
        function startBugHopping() {
            bugInterval = setInterval(moveBug, speed);
        }

        // Move bug randomly
        function moveBug() {
            bugX = Math.random() * (canvas.width - 40) + 20;
            bugY = Math.random() * (canvas.height - 40) + 20;
            drawBug();
        }

        // Handle mouse click events
        canvas.addEventListener("click", function(event) {
            var mouseX = event.clientX - canvas.getBoundingClientRect().left;
            var mouseY = event.clientY - canvas.getBoundingClientRect().top;
            var distance = Math.sqrt((mouseX - bugX) ** 2 + (mouseY - bugY) ** 2);
            if (distance < 20) {
                score++;
                document.getElementById("score").textContent = score; // Update score display
                clearInterval(bugInterval);
                speed -= 50; // Decrease hopping interval by 50 milliseconds
                startBugHopping();
            }
        });

        // Reset score button click event
        document.getElementById("resetScore").addEventListener("click", function() {
            score = 0;
            document.getElementById("score").textContent = score; // Reset score display
        });

        // Reset speed button click event
        document.getElementById("resetSpeed").addEventListener("click", function() {
            speed = 1000; // Reset hopping interval to initial value
        });

        // Start the game
        startBugHopping();