// 로딩시 진행되는 제이쿼리
$(document).ready(function () {
  // 페이지가 로드되면 5초 후에 txt_loading 숨김
  setTimeout(function () {
    $("#txt_loading").fadeOut();
  }, 4); // 5000 밀리초 = 5초
});

$(document).ready(function () {
  // 페이지가 로드되면 3초 후에 텍스트 변경
  setTimeout(function () {
    $("#logo").text("Welcome to Urbur");
  }, 2); // 5000 밀리초 = 5초
});

$(document).ready(function () {
  // 페이지가 로드되면 3초 후에 txt_loading 보이기
  setTimeout(function () {
    $("#intro").show();
    $("html").css("background-color", "white");
    $("body").css("background-color", "white");
  }, 4); // 3000 밀리초 = 3초
});

$(document).ready(function () {
  setTimeout(function () {
    var firstSentence = "지나 ";
    var secondSentence = "실제 .";
    var thirdSentence = "즐거운 .";

    var index = 0;
    var typingInterval = setInterval(function () {
      if (index < firstSentence.length) {
        $("#typing-text").append(firstSentence[index]);
      } else if (index === firstSentence.length) {
        // 첫 번째 문장이 모두 출력된 후에 한 칸 띄워줍니다.
        $("#typing-text").append("<br>");
      } else if (index < firstSentence.length + secondSentence.length + 1) {
        $("#typing-text").append(
          secondSentence[index - firstSentence.length - 1]
        );
      } else if (index === firstSentence.length + secondSentence.length + 1) {
        // 두 번째 문장이 모두 출력된 후에 한 칸 띄워줍니다.
        $("#typing-text").append("<br>");
      } else {
        $("#typing-text").append(
          thirdSentence[
            index - firstSentence.length - secondSentence.length - 2
          ]
        );
      }
      index++;
      if (
        index ===
        firstSentence.length + secondSentence.length + thirdSentence.length + 2
      ) {
        clearInterval(typingInterval);
        // 타이핑이 종료된 후에 1초 후에 버튼을 보여줍니다.
        setTimeout(function () {
          $("#btn_agree").show();
          $("#btn_login").show();
          //$("#btn_disAgree").show();
          console.log("타이핑 종료 후 함수 호출");
        }, 1000); // 1초 후에 함수 호출
      }
    }, 100); // 한 글자씩 추가되는 시간 간격 (ms)
  }, 4); // 6초 후에 타이핑 시작
});

$(document).ready(function () {
  // 1초마다 현재 시간을 갱신하여 표시
  setInterval(function () {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 시간을 24시간 형식으로 포맷팅
    var formattedTime =
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes +
      "PM";

    // 날짜를 yyyy-mm-dd 형식으로 포맷팅
    var formattedDate =
      year +
      "년 " +
      (month < 10 ? "0" : "") +
      month +
      "월 " +
      (day < 10 ? "0" : "") +
      day +
      "일 ";

    // 날짜와 시간을 합쳐서 표시
    $("#day").text(formattedDate);
    $("#time").text(formattedTime);
  }, 1000); // 1초마다 실행
});

$(document).ready(function () {
  var i = 0;

  // 1초마다 toggleSpan 함수 실행
  setInterval(function () {
    toggleSpan();
  }, 1000);

  // span 요소를 숨기거나 보이기 위한 함수
  function toggleSpan() {
    // 모든 span 요소를 숨김

    // i의 값에 따라 첫 번째 또는 두 번째 span 요소를 보이게 함
    if (i % 2 == 0) {
      $("#go_to").text("목적지");
    } else {
      $("#go_to").text("현위치");
    }

    // i 값을 업데이트하여 다음 번에 보여줄 span 요소를 결정
    i++;
  }
});

// 클릭 이벤트
$(document).ready(function () {
  $("#btn_agree").click(function () {
    $("#intro").hide();
    $("#main").show();
    // 속력 계산 및 콘솔 출력
    calculateSpeed(unityCoordinates);
    mapmove();
  });
});

$(document).ready(function () {
  $("#giar_R").click(function () {
    $("#giar_R").css("color", "red");
    $("#giar_D").css("color", "gray");
    $("#car").css("height", "30vh");
  });
});

$(document).ready(function () {
  $("#giar_D").click(function () {
    $("#giar_R").css("color", "gray");
    $("#giar_D").css("color", "red");
    $("#car").css("height", "49vh");
  });
});

$(document).ready(function () {
  $("#btn_login").click(function () {
    $("#login").show();
    $("#intro").hide();
    $("#car").css("height", "49vh");
  });
});

//메인

var unityCoordinates = [
  { x: -201.71, y: 37.98 },
  { x: -201.71, y: 38.11 },
  { x: -201.71, y: 38.42 },
  { x: -201.71, y: 38.94 },
  { x: -201.71, y: 39.71 },
  { x: -201.71, y: 40.76 },
  { x: -201.71, y: 42.09 },
  { x: -201.71, y: 43.69 },
  { x: -201.71, y: 45.55 },
  { x: -201.71, y: 47.65 },
  { x: -201.71, y: 49.99 },
  { x: -201.71, y: 52.54 },
  { x: -201.71, y: 55.29 },
  { x: -201.71, y: 58.24 },
  { x: -201.71, y: 61.39 },
  { x: -201.71, y: 64.7 },
  { x: -201.7, y: 68.18 },
  { x: -201.7, y: 71.82 },
  { x: -201.7, y: 75.61 },
  { x: -201.7, y: 79.55 },
  { x: -201.7, y: 83.63 },
  { x: -201.69, y: 87.83 },
  { x: -201.69, y: 92.16 },
  { x: -201.68, y: 96.61 },
  { x: -201.68, y: 101.18 },
  { x: -201.68, y: 105.85 },
  { x: -201.67, y: 110.63 },
  { x: -201.66, y: 115.5 },
  { x: -200.74, y: 120.01 },
  { x: -197.89, y: 123.09 },
  { x: -194.05, y: 124.01 },
  { x: -190.05, y: 124.1 },
  { x: -185.91, y: 124.12 },
  { x: -181.65, y: 124.13 },
  { x: -177.8, y: 124.13 },
  { x: -174.77, y: 124.13 },
  { x: -172.51, y: 124.13 },
  { x: -170.97, y: 124.13 },
  { x: -170.12, y: 124.13 },
  { x: -169.92, y: 124.13 },
  { x: -201.71, y: 37.97 },
];

// 예시 위도 경도
var coordinates = [
  { x: 127.0264395, y: 37.5105302 },
  { x: 127.0264402, y: 37.5105302 },
  { x: 127.0264464, y: 37.5105302 },
  { x: 127.0264605, y: 37.5105302 },
  { x: 127.0264847, y: 37.5105302 },
  { x: 127.02652, y: 37.5105302 },
  { x: 127.0265698, y: 37.5105302 },
  { x: 127.0266311, y: 37.5105302 },
  { x: 127.0267048, y: 37.5105302 },
  { x: 127.02679, y: 37.5105302 },
  { x: 127.0268864, y: 37.5105302 },
  { x: 127.0269971, y: 37.5105303 },
  { x: 127.027114, y: 37.5105303 },
  { x: 127.02724, y: 37.5105303 },
  { x: 127.0273796, y: 37.5105303 },
  { x: 127.0275235, y: 37.5105303 },
  { x: 127.0276752, y: 37.5105303 },
  { x: 127.0278344, y: 37.5105304 },
  { x: 127.0280008, y: 37.5105304 },
  { x: 127.02818, y: 37.5105305 },
  { x: 127.0283601, y: 37.5105306 },
  { x: 127.0285463, y: 37.5105307 },
  { x: 127.0287384, y: 37.5105308 },
  { x: 127.0289362, y: 37.510531 },
  { x: 127.0291462, y: 37.5105311 },
  { x: 127.0293547, y: 37.5105313 },
  { x: 127.029568, y: 37.5105314 },
  { x: 127.029786, y: 37.5105316 },
  { x: 127.0300147, y: 37.5105338 },
  { x: 127.0302089, y: 37.5105835 },
  { x: 127.0303276, y: 37.5106987 },
  { x: 127.0303523, y: 37.5108442 },
  { x: 127.030355, y: 37.5109897 },
  { x: 127.0303555, y: 37.5111399 },
  { x: 127.0303559, y: 37.511293 },
  { x: 127.030356, y: 37.5114238 },
  { x: 127.030356, y: 37.5115254 },
  { x: 127.0303559, y: 37.5115998 },
  { x: 127.0303559, y: 37.5116484 },
  { x: 127.0303558, y: 37.5116726 },
  { x: 127.0303558, y: 37.5116758 },
  // 이하 계속
];

function mapmove() {
  var currentIndex = 0;
  // 0.5초마다 지도의 중심 변경
  setInterval(function () {
    // 배열의 다음 좌표 가져오기

    if (currentIndex == 39) return;
    currentIndex = (currentIndex + 1) % coordinates.length;
    var newCenter = new naver.maps.LatLng(
      coordinates[currentIndex].y,
      coordinates[currentIndex].x
    );

    // 지도 중심 변경
    map.setCenter(newCenter);
  }, 500);
}

function calculateSpeed(coordinates) {
  var i = 0; // 초기 인덱스값 설정

  // 0.5초 간격으로 속력을 계산하고 표시하는 함수
  function calculateAndShowSpeed() {
    if (i >= coordinates.length - 1) {
      clearInterval(intervalId); // 모든 좌표를 처리한 경우 setInterval 종료
      return;
    }

    var currentPos = coordinates[i + 1]; // 다음 위치
    var previousPos = coordinates[i]; // 이전 위치

    // 거리 계산
    var distanceX = Math.abs(currentPos.x - previousPos.x);
    var distanceY = Math.abs(currentPos.y - previousPos.y);
    var totalDistance = Math.sqrt(
      Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
    );

    // 속력 계산 (거리 / 시간)
    var speed = totalDistance / 0.5; // 0.5초 간격
    speed = speed * 3.6;

    if (i == 39) {
      $("#speed").text("00");
    } else {
      $("#speed").text(speed.toFixed(0).padStart(2, "0"));
    }

    console.log("Speed:", speed.toFixed(2), "km/h");

    i++; // 인덱스 증가
  }

  // 처음 한번 호출
  calculateAndShowSpeed();

  // 0.5초 간격으로 calculateAndShowSpeed 함수 호출
  var intervalId = setInterval(calculateAndShowSpeed, 500);
}
