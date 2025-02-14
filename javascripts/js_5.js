document.addEventListener('DOMContentLoaded', function () {
    let count_1 = 0;
    const click_bt = document.getElementById('click_bt');
    const click_сount = document.getElementById('click_сount');

    click_bt.addEventListener('click', function () {
      count_1++;
      click_сount.textContent = count_1;

      if (count_1 >= 15) {
        click_bt.disabled = true;
        alert("Вы достигли максимального количества кликов!");
      }
    });


    let count_2 = 10;
    const timer_1 = document.getElementById('timer_1');
    const reset_bt_1 = document.getElementById('reset_bt_1');
    let interval_1;

    function startTimer() {
        interval_1 = setInterval(function () {
        count_2--;
        timer_1.textContent = count_2;

        if (count_2 <= 0) {
            clearInterval(interval_1);
            timer_1.textContent = "Время вышло!";
        }
        }, 1000);
    }

    reset_bt_1.addEventListener('click', function () {
        clearInterval(interval_1);
        count_2 = 10;
        timer_1.textContent = count_2;
        startTimer();
    });
        startTimer();


    let count_3 = 0;
    let interval_2;
    const timer_2 = document.getElementById('timer_2');
    const start_bt = document.getElementById('start_bt');
    const stop_bt = document.getElementById('stop_bt');
    const reset_bt_2 = document.getElementById('reset_bt_2');

    start_bt.addEventListener('click', function () {
      if (!interval_2) {
        interval_2 = setInterval(function () {
          count_3++;
          timer_2.textContent = count_3;
        }, 1000);
      }
    });

    stop_bt.addEventListener('click', function () {
      clearInterval(interval_2);
      interval_2 = null;
    });

    reset_bt_2.addEventListener('click', function () {
      clearInterval(interval_2);
      interval_2 = null;
      count_3 = 0;
      timer_2.textContent = count_3;
    });
  });