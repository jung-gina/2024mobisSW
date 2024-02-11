// 로딩시 진행되는 제이쿼리
$(document).ready(function () {
  // 페이지가 로드되면 5초 후에 txt_loading 숨김
  setTimeout(function () {
    $("#txt_loading").fadeOut();
  }, 6000); // 5000 밀리초 = 5초
});

$(document).ready(function () {
  // 페이지가 로드되면 3초 후에 텍스트 변경
  setTimeout(function () {
    $("#logo").text("Welcome to Urbur");
  }, 3000); // 5000 밀리초 = 5초
});

$(document).ready(function () {
  // 페이지가 로드되면 3초 후에 txt_loading 보이기
  setTimeout(function () {
    $("#intro").show();
  }, 3001); // 3000 밀리초 = 3초
});

$(document).ready(function () {
  setTimeout(function () {
    var firstSentence = "지나 님 안녕하세요.";
    var secondSentence = "실제 도로환경에 맞춰 안전 운전하세요.";

    var index = 0;
    var typingInterval = setInterval(function () {
      if (index < firstSentence.length) {
        $("#typing-text").append(firstSentence[index]);
      } else if (index === firstSentence.length) {
        // 첫 번째 문장이 모두 출력된 후에 한 칸 띄워줍니다.
        $("#typing-text").append("<br>");
      } else {
        $("#typing-text").append(
          secondSentence[index - firstSentence.length - 1]
        );
      }
      index++;
      if (index === firstSentence.length + secondSentence.length + 1) {
        clearInterval(typingInterval);
        // 타이핑이 종료된 후에 1초 후에 함수를 호출합니다.
        setTimeout(function () {
          // 여기에 호출할 함수 내용을 작성합니다.
          $("#btn_agree").show();
          $("#btn_disAgree").show();
          console.log("타이핑 종료 후 함수 호출");
        }, 1000); // 1초 후에 함수 호출
      }
    }, 100); // 한 글자씩 추가되는 시간 간격 (ms)
  }, 6000); // 6초 후에 타이핑 시작
});

// 클릭 이벤트
$(document).ready(function () {
  $("#btn_agree").click(function () {
    $("#intro").hide();
    $("#main").show();
  });
});
