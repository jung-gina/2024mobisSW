// uuid 전역 변수
var uuid = 0;

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
    var firstSentence = "안녕 ";
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

var map;

// 클릭 이벤트
$(document).ready(function () {
  $("#btn_agree").click(function () {
    $("#intro").hide();
    $("#main").show();
    // 속력 계산 및 콘솔 출력
    initializeMap();
    calculateSpeed(newCoordinates);

    //mapmove();
    //초기 마커 추가
    newCoordinates.forEach(function (coord) {
      addMarker(coord);
    });

    // 0.5초 간격으로 마커 이동 시작
    moveMarker();
    angle();
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
    $("#loginForm").show();
    $("#signup_form").show();
    $(".line").show();
    $("#intro").hide();
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

function initializeMap() {
  map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5105302, 127.0264395),
    zoom: 20,
  });
}

var markers = [];
var index = 1;
var HOME_PATH = window.HOME_PATH || ".";
// 마커 추가 함수
function addMarker(coord) {
  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(coord.y, coord.x),
    map: map,
    icon: {
      url: "./img/icon_car.png",
      size: new naver.maps.Size(30, 51),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(0, 0),
    },
  });
  markers.push(marker);

  var human = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5116758, 127.0303558),
    map: map,
    icon: {
      url: "./img/icon_left_human.png",
      size: new naver.maps.Size(225, 225),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(0, 0),
    },
  });
}

var index = 1;
var currentIndex = 0;

function moveMarker() {
  if (index < newCoordinates.length) {
    if (index % 5 == 0) {
      sendRequest();
    }
    var coord = newCoordinates[index];
    markers.forEach(function (marker) {
      marker.setPosition(new naver.maps.LatLng(coord.y, coord.x));
    });
    index++;

    if (currentIndex == newCoordinates.length) return;
    currentIndex = (currentIndex + 1) % newCoordinates.length;
    var newCenter = new naver.maps.LatLng(
      newCoordinates[currentIndex].y,
      newCoordinates[currentIndex].x
    );

    // 지도 중심 변경
    map.setCenter(newCenter);
    setTimeout(moveMarker, 100); // 0.1초 후에 다음 좌표로 이동
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // 지구의 반지름 (미터)
  const φ1 = (lat1 * Math.PI) / 180; // 위도 1
  const φ2 = (lat2 * Math.PI) / 180; // 위도 2
  const Δφ = ((lat2 - lat1) * Math.PI) / 180; // 위도 변화
  const Δλ = ((lon2 - lon1) * Math.PI) / 180; // 경도 변화

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // 두 지점 간의 거리 (미터)
  return distance;
}

function calculateSpeed(coordinates) {
  var i = 0; // 초기 인덱스값 설정

  // 0.5초 간격으로 속력을 계산하고 표시하는 함수
  function calculateAndShowSpeed() {
    if (i >= coordinates.length - 1) {
      clearInterval(intervalId); // 모든 좌표를 처리한 경우 setInterval 종료
      return;
    }

    var currentPos = coordinates[i + 5]; // 다음 위치
    var previousPos = coordinates[i]; // 이전 위치

    // // 거리 계산
    // var distanceX = Math.abs(currentPos.x - previousPos.x);
    // var distanceY = Math.abs(currentPos.y - previousPos.y);
    // var totalDistance = Math.sqrt(
    //   Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
    // );

    var distance = calculateDistance(
      currentPos.x,
      currentPos.y,
      previousPos.x,
      previousPos.y
    );
    // 속력 계산 (거리 / 시간)
    var speed = distance; // 0.5초 간격
    speed = speed * 3.6;

    $("#speed").text(speed.toFixed(0));

    console.log("Speed:", speed.toFixed(2), "km/h");

    i += 1; // 인덱스 증가
  }

  // 처음 한번 호출
  calculateAndShowSpeed();

  // 0.5초 간격으로 calculateAndShowSpeed 함수 호출
  var intervalId = setInterval(calculateAndShowSpeed, 100);
}

function angle() {
  var i = 1;

  function calculateAngle() {
    if (i >= newCoordinates.length - 1) {
      clearInterval(intervalId); // 모든 좌표를 처리한 경우 setInterval 종료
      return;
    }
    var vectorA = [
      newCoordinates[i].x - newCoordinates[i - 1].x,
      newCoordinates[i].y - newCoordinates[i - 1].y,
    ];
    let vectorB = [0, 1];

    // 두 벡터 사이의 각도 계산
    let angle = angleBetweenVectors(vectorA, vectorB);

    console.log(angle); // 90 (도) - 직각
    i++;
  }

  // 처음 한번 호출
  calculateAngle();
  // 0.5초 간격으로 calculateAndShowSpeed 함수 호출
  var intervalId = setInterval(calculateAngle, 100);
}

function angleBetweenVectors(a, b) {
  // 벡터 a와 b의 내적을 계산
  let dotProduct = a[0] * b[0] + a[1] * b[1]; // 2차원 벡터에 대해서만 계산

  // 벡터 a와 b의 크기 계산
  let magnitudeA = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
  let magnitudeB = Math.sqrt(b[0] * b[0] + b[1] * b[1]);

  // 코사인 값 계산
  let cosine = dotProduct / (magnitudeA * magnitudeB);

  // 각도 계산 (라디안에서도 반환 가능)
  let angle = Math.acos(cosine) * (180 / Math.PI); // 라디안을 도로 변환

  return angle;
}

var newCoordinates = [
  { y: 37.5179691801747, x: 127.023567520416 },
  { y: 37.5179691801747, x: 127.023567520416 },
  { y: 37.5179691801747, x: 127.023567520416 },
  { y: 37.5179691801747, x: 127.023567520416 },
  { y: 37.5179691949351, x: 127.023567520937 },
  { y: 37.5179692450933, x: 127.023567523191 },
  { y: 37.5179693126237, x: 127.023567523277 },
  { y: 37.5179694078193, x: 127.023567523798 },
  { y: 37.5179695323297, x: 127.023567523884 },
  { y: 37.5179696802609, x: 127.023567523624 },
  { y: 37.5179698265597, x: 127.023567523624 },
  { y: 37.5179700695662, x: 127.023567523624 },
  { y: 37.5179703124696, x: 127.023567523624 },
  { y: 37.5179705896881, x: 127.023567523624 },
  { y: 37.5179709048818, x: 127.023567523624 },
  { y: 37.5179711978059, x: 127.023567523624 },
  { y: 37.5179715832278, x: 127.023567523624 },
  { y: 37.517972011711, x: 127.023567523624 },
  { y: 37.5179724837541, x: 127.023567523624 },
  { y: 37.5179729975869, x: 127.023567523624 },
  { y: 37.5179735585364, x: 127.023567523624 },
  { y: 37.5179741629597, x: 127.023567523624 },
  { y: 37.5179748105819, x: 127.023567523624 },
  { y: 37.5179755023652, x: 127.023567523624 },
  { y: 37.5179763663083, x: 127.023567523624 },
  { y: 37.5179771595935, x: 127.023567523624 },
  { y: 37.5179778596935, x: 127.023567523624 },
  { y: 37.5179789017416, x: 127.023567523624 },
  { y: 37.5179796904904, x: 127.023567523624 },
  { y: 37.5179806853188, x: 127.023567523624 },
  { y: 37.5179819115722, x: 127.023567523624 },
  { y: 37.5179828302956, x: 127.023567523624 },
  { y: 37.5179839793786, x: 127.023567523624 },
  { y: 37.5179851788432, x: 127.023567523624 },
  { y: 37.5179864281737, x: 127.023567523884 },
  { y: 37.5179877268547, x: 127.023567524404 },
  { y: 37.517989074388, x: 127.023567524925 },
  { y: 37.5179904702922, x: 127.023567525445 },
  { y: 37.517991914052, x: 127.023567525965 },
  { y: 37.5179934051691, x: 127.023567526485 },
  { y: 37.5179949431966, x: 127.023567527005 },
  { y: 37.5179965276191, x: 127.023567527526 },
  { y: 37.5179981579726, x: 127.023567528046 },
  { y: 37.5179998337932, x: 127.023567528566 },
  { y: 37.5180015545997, x: 127.023567529086 },
  { y: 37.5180033199453, x: 127.023567529606 },
  { y: 37.5180051293834, x: 127.023567530127 },
  { y: 37.5180069824499, x: 127.023567530647 },
  { y: 37.5180088786638, x: 127.023567531167 },
  { y: 37.5180108176297, x: 127.023567531687 },
  { y: 37.518012798901, x: 127.023567532207 },
  { y: 37.5180148220136, x: 127.023567532727 },
  { y: 37.5180168865725, x: 127.023567533248 },
  { y: 37.5180189921307, x: 127.023567533768 },
  { y: 37.518021138276, x: 127.023567534288 },
  { y: 37.5180233245958, x: 127.023567534808 },
  { y: 37.5180255506779, x: 127.023567535328 },
  { y: 37.5180278183779, x: 127.023567535849 },
  { y: 37.5180301082101, x: 127.023567536369 },
  { y: 37.5180324444372, x: 127.023567536542 },
  { y: 37.5180348210108, x: 127.023567537149 },
  { y: 37.518037223325, x: 127.023567538363 },
  { y: 37.5180396644563, x: 127.023567539056 },
  { y: 37.5180421522919, x: 127.02356753923 },
  { y: 37.5180446678442, x: 127.023567539056 },
  { y: 37.5180472163025, x: 127.02356753897 },
  { y: 37.5180498041794, x: 127.02356753923 },
  { y: 37.5180524253748, x: 127.023567539663 },
  { y: 37.5180550809367, x: 127.023567540964 },
  { y: 37.5180577765359, x: 127.023567542264 },
  { y: 37.518060504199, x: 127.023567543738 },
  { y: 37.5180632690298, x: 127.023567544865 },
  { y: 37.5180660672649, x: 127.023567545212 },
  { y: 37.5180688983545, x: 127.023567544692 },
  { y: 37.5180717609067, x: 127.023567543565 },
  { y: 37.5180746567431, x: 127.023567542091 },
  { y: 37.5180775836125, x: 127.023567540704 },
  { y: 37.5180805374598, x: 127.02356754001 },
  { y: 37.5180835208452, x: 127.02356754001 },
  { y: 37.5180865363118, x: 127.02356754079 },
  { y: 37.5180895862138, x: 127.023567541917 },
  { y: 37.5180926645027, x: 127.023567543738 },
  { y: 37.5180957716251, x: 127.023567545559 },
  { y: 37.5180989069626, x: 127.023567547379 },
  { y: 37.518102073505, x: 127.0235675492 },
  { y: 37.5181052683999, x: 127.023567550847 },
  { y: 37.5181084927814, x: 127.023567552581 },
  { y: 37.5181117446218, x: 127.023567554402 },
  { y: 37.5181150243335, x: 127.023567556223 },
  { y: 37.518118332329, x: 127.02356755813 },
  { y: 37.5181216686426, x: 127.023567560471 },
  { y: 37.5181250310061, x: 127.023567562812 },
  { y: 37.5181284212066, x: 127.023567565152 },
  { y: 37.5181318385224, x: 127.023567567493 },
  { y: 37.5181352829191, x: 127.023567570007 },
  { y: 37.5181387513037, x: 127.023567572782 },
  { y: 37.5181422483501, x: 127.023567575643 },
  { y: 37.5181451838112, x: 127.023567577984 },
  { y: 37.5181493183932, x: 127.023567581365 },
  { y: 37.5181528899121, x: 127.023567584226 },
  { y: 37.5181564885463, x: 127.023567587434 },
  { y: 37.5181595072434, x: 127.023567590035 },
  { y: 37.518163758397, x: 127.023567594023 },
  { y: 37.5181674286856, x: 127.023567597404 },
  { y: 37.5181711248867, x: 127.023567600959 },
  { y: 37.5181748431168, x: 127.023567604513 },
  { y: 37.5181785865377, x: 127.023567608415 },
  { y: 37.5181823515751, x: 127.023567612316 },
  { y: 37.5181855103507, x: 127.023567615524 },
  { y: 37.5181893170061, x: 127.023567619425 },
  { y: 37.5181931486462, x: 127.023567623587 },
  { y: 37.5181976433906, x: 127.023567628615 },
  { y: 37.5182015235219, x: 127.023567633037 },
  { y: 37.5182047738158, x: 127.023567636678 },
  { y: 37.5182086948091, x: 127.0235676411 },
  { y: 37.5182126354945, x: 127.023567645521 },
  { y: 37.5182165999272, x: 127.023567650116 },
  { y: 37.5182212497339, x: 127.023567655751 },
  { y: 37.5182245908588, x: 127.023567659826 },
  { y: 37.5182286171171, x: 127.023567664768 },
  { y: 37.5182326659543, x: 127.023567669796 },
  { y: 37.5182367336588, x: 127.023567675085 },
  { y: 37.5182415065668, x: 127.023567681501 },
  { y: 37.5182449315807, x: 127.023567686009 },
  { y: 37.518249061042, x: 127.023567691471 },
  { y: 37.5182539025802, x: 127.023567697887 },
  { y: 37.5182580741063, x: 127.023567703348 },
  { y: 37.5182615646918, x: 127.023567707943 },
  { y: 37.5182657715468, x: 127.023567713579 },
  { y: 37.518269996788, x: 127.023567719301 },
  { y: 37.5182742412401, x: 127.02356772511 },
  { y: 37.5182785039409, x: 127.023567731092 },
  { y: 37.518282785234, x: 127.023567737074 },
  { y: 37.5182870846041, x: 127.023567743056 },
  { y: 37.5182914020509, x: 127.023567749038 },
  { y: 37.5182957373341, x: 127.02356775502 },
  { y: 37.5183000903161, x: 127.023567761002 },
  { y: 37.5183044607907, x: 127.023567766985 },
  { y: 37.5183088485517, x: 127.023567772967 },
  { y: 37.5183132533929, x: 127.023567778949 },
  { y: 37.5183176752113, x: 127.023567785191 },
  { y: 37.5183220498099, x: 127.023567970377 },
  { y: 37.5183263091428, x: 127.023568496545 },
  { y: 37.5183304330024, x: 127.023569429326 },
  { y: 37.5183343873313, x: 127.023570821863 },
  { y: 37.5183381321612, x: 127.023572699128 },
  { y: 37.5183416240869, x: 127.023575057565 },
  { y: 37.5183448219374, x: 127.023577870557 },
  { y: 37.5183476871874, x: 127.023581096837 },
  { y: 37.5183501886322, x: 127.023584684213 },
  { y: 37.5183523020432, x: 127.023588573471 },
  { y: 37.5183540104777, x: 127.023592701146 },
  { y: 37.5183553019761, x: 127.023597002998 },
  { y: 37.5183561726894, x: 127.023601415042 },
  { y: 37.5183566237172, x: 127.023605874943 },
  { y: 37.5183567386048, x: 127.023610334498 },
  { y: 37.518356868064, x: 127.023614810785 },
  { y: 37.5183569923338, x: 127.023619315856 },
  { y: 37.5183570797281, x: 127.023623856819 },
  { y: 37.5183571362613, x: 127.023628426653 },
  { y: 37.5183571722775, x: 127.023633030473 },
  { y: 37.5183571957843, x: 127.023637662122 },
  { y: 37.5183572120741, x: 127.02364232741 },
  { y: 37.518357224343, x: 127.023647019834 },
  { y: 37.518357234378, x: 127.023651745204 },
  { y: 37.5183572432446, x: 127.02365649719 },
  { y: 37.5183572514239, x: 127.023661281514 },
  { y: 37.5183572592938, x: 127.023666091847 },
  { y: 37.5183572670263, x: 127.023670933825 },
  { y: 37.5183572746557, x: 127.023675801465 },
  { y: 37.5183572822851, x: 127.02368069997 },
  { y: 37.5183572899145, x: 127.02368562353 },
  { y: 37.5183572975439, x: 127.023690577608 },
  { y: 37.5183573051733, x: 127.023695556655 },
  { y: 37.5183573128027, x: 127.023700565613 },
  { y: 37.5183573204665, x: 127.023705599106 },
  { y: 37.5183573281302, x: 127.023710661643 },
  { y: 37.5183573358283, x: 127.023715748628 },
  { y: 37.5183573422205, x: 127.023720009038 },
  { y: 37.5183573512933, x: 127.023726002881 },
  { y: 37.5183573577543, x: 127.023730306207 },
  { y: 37.5183573669302, x: 127.023736359524 },
  { y: 37.5183573734598, x: 127.023740704638 },
  { y: 37.5183573827388, x: 127.023746816303 },
  { y: 37.5183573906775, x: 127.023752081972 },
  { y: 37.5183573986506, x: 127.02375737105 },
  { y: 37.5183574052833, x: 127.023761797573 },
  { y: 37.5183574146998, x: 127.023768022118 },
  { y: 37.5183574213669, x: 127.023772488002 },
  { y: 37.5183574307834, x: 127.023778767514 },
  { y: 37.5183574374849, x: 127.023783272238 },
  { y: 37.5183574470388, x: 127.023789605415 },
  { y: 37.5183574537747, x: 127.023794148113 },
  { y: 37.5183574619196, x: 127.023799619863 },
  { y: 37.5183574714735, x: 127.023806031675 },
  { y: 37.5183574796871, x: 127.023811551369 },
  { y: 37.5183574865261, x: 127.023816167673 },
  { y: 37.5183574961831, x: 127.023822655693 },
  { y: 37.5183575030221, x: 127.023827307803 },
  { y: 37.5183575126791, x: 127.023833845413 },
  { y: 37.5183575209271, x: 127.023839471658 },
  { y: 37.518357527766, x: 127.02384417596 },
  { y: 37.518357536014, x: 127.023849839745 },
  { y: 37.5183575457398, x: 127.023856473157 },
  { y: 37.5183575526475, x: 127.023861228177 },
  { y: 37.5183575609986, x: 127.023866952391 },
  { y: 37.5183575693497, x: 127.023872696198 },
  { y: 37.5183575777008, x: 127.023878459598 },
  { y: 37.5183575860519, x: 127.023884242159 },
  { y: 37.518357594403, x: 127.023890043794 },
  { y: 37.5183576027541, x: 127.023895864415 },
  { y: 37.5183576111395, x: 127.023901703676 },
  { y: 37.5183576195937, x: 127.023907561317 },
  { y: 37.5183576280479, x: 127.023913437338 },
  { y: 37.5183576365021, x: 127.023919331479 },
  { y: 37.5183576449563, x: 127.023925243479 },
  { y: 37.5183576534105, x: 127.023931173339 },
  { y: 37.5183576618647, x: 127.023937120799 },
  { y: 37.5183576703189, x: 127.023943085512 },
  { y: 37.5183576787731, x: 127.023949067391 },
  { y: 37.5183576872273, x: 127.023955066436 },
  { y: 37.518357695544, x: 127.023960985632 },
  { y: 37.5183577032765, x: 127.023966696147 },
  { y: 37.5183577103904, x: 127.023972199455 },
  { y: 37.5183577168857, x: 127.023977498676 },
  { y: 37.5183577227624, x: 127.023982597019 },
  { y: 37.5183577281579, x: 127.023987496694 },
  { y: 37.5183577330036, x: 127.023992199566 },
  { y: 37.5183577372995, x: 127.023996707758 },
  { y: 37.5183577411485, x: 127.024001023177 },
  { y: 37.5183577445852, x: 127.024005147472 },
  { y: 37.5183577476095, x: 127.024009082982 },
  { y: 37.5183577502901, x: 127.024012832179 },
  { y: 37.518357752627, x: 127.024016397404 },
  { y: 37.5183577546202, x: 127.024019780824 },
  { y: 37.518357756373, x: 127.024022984693 },
  { y: 37.5183577578851, x: 127.024026010701 },
  { y: 37.5183577594316, x: 127.024029338635 },
  { y: 37.5183577604626, x: 127.02403157292 },
  { y: 37.5183577614936, x: 127.024034096776 },
];
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
  // 이하 생략
];

// 통신 관련

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const url = new URL("http://47.186.58.92:52779/carLoginHandler");
  url.searchParams.append("email", email);
  url.searchParams.append("password", password);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 서버로부터 받은 응답을 처리
      console.log(data);
      uuid = data.id;

      document.getElementById("response").innerText = JSON.stringify(data);
    })
    .then((response) => {
      $("#intro").hide();
      $("#server").hide();
      $("#main").show();
      // 속력 계산 및 콘솔 출력
      initializeMap();
      calculateSpeed(newCoordinates);

      //mapmove();
      //초기 마커 추가
      newCoordinates.forEach(function (coord) {
        addMarker(coord);
      });

      // 0.5초 간격으로 마커 이동 시작
      moveMarker();
      angle();
    })
    .catch((error) => {
      // 오류 처리
      console.error("Error:", error);
      document.getElementById("response").innerText =
        "An error occurred. Please try again.";
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const url = new URL("http://47.186.58.92:52779/carSignupHandler");
  url.searchParams.append("email", email);
  url.searchParams.append("password", password);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 서버로부터 받은 응답을 처리
      console.log(data);
      document.getElementById("response").innerText = JSON.stringify(data);
    })
    .catch((error) => {
      // 오류 처리
      console.error("Error:", error);
      document.getElementById("response").innerText =
        "An error occurred. Please try again.";
    });
}

function alertRed() {
  $("#my_human").show();
  $("#big").css("background", "red");
}

var uuidList = [];

function getData() {
  // GET 해오기

  // 성공시 안에 들어갈 로직
  // 경고 뜨기
  uuidList.forEach((cUuid) => {
    if (cUuid == uuid) {
      alertRed();
    }
  });

  setTimeout(getData, 500); // 0.5초 마다 반복
}

function sendRequest() {
  // 5초 마다
  const userID = uuid;
  // const latitude = newCoordinates[index].y;
  // const longitude = newCoordinates[index].X;
  // const data = {
  //   userID: userID,
  //   latitude: latitude,
  //   longitude: longitude,
  // };
  const data = {
    userID: userID,
    latitude: 0,
    longitude: 0,
  };

  // GET 요청으로 변경
  const queryParams = new URLSearchParams(data).toString();

  fetch(`http://47.186.58.92:52804/tasks/2`, {
    method: "GET",
  }).then((res) => {
    res.text().then((a) => {
      const ress = JSON.parse(a);
      console.log(ress);
      data.latitude = ress.lat;
      data.longitude = ress.lng;
      fetch(
        `http://47.186.58.92:52779/updateCarPositionHandler?${queryParams}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          document.getElementById("response").innerText = data;
        })
        .catch((error) => {
          console.error("Error:", error);
          document.getElementById("response").innerText =
            "An error occurred. Please try again.";
        });
    });
  });
}
