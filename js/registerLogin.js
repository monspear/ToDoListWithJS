const userForm = document.querySelector("div.main-view #register-login"); // loginform 가져오기
const userInfo = document.querySelector("div.main-view #register-login input"); // loginform input 가져오기
const userName = document.querySelector("div.main-view #user-name"); // login 후 사용자이름 가져오기
const logout = document.querySelector("div.main-view #logout");      // logout 버튼 가져오기

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const saveUserName = localStorage.getItem(USERNAME_KEY);             // 로컬저장소에 저장된 이름 가져오기


function onClickLogout(event){                                       // 로그아웃 버튼 클릭 이벤트
    event.preventDefault();                                          // 버튼 클릭 이벤트 기본 동작 막기(다시 페이지 불러오기 막기)
    localStorage.removeItem(USERNAME_KEY);                           // 로컬저장소에 저장된 키 제거
    userForm.classList.remove(HIDDEN_CLASSNAME);                     // 유저 로그인 폼 보이도록
    userName.classList.add(HIDDEN_CLASSNAME);                        // 유저 이름부분 안보이도록
    logout.classList.add(HIDDEN_CLASSNAME);                          // 로그아웃버튼 안보이도록
}

function afterLogin(info){
    userName.innerHTML = `Hello! ${info}\n have a nice day!`;
    userName.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){                                        // 유저 로그인 폼 버튼 클릭이벤트
    event.preventDefault();                                         
    const name = userInfo.value;
    localStorage.setItem(USERNAME_KEY, name);                         // 로컬저장소에 입력값(이름) 저장
    afterLogin(name);                                                 // 로그인 버튼을 눌렀을 때, 
    
    userForm.classList.add(HIDDEN_CLASSNAME);
    
}

if(saveUserName === null){                                            // 유저이름이 로컬저장소에 저장되지 않았다면
    userForm.classList.remove(HIDDEN_CLASSNAME);                      // 폼이 보이도록
    userForm.addEventListener("submit",onLoginSubmit);                // 폼의 버튼클릭 이벤트가 발동하면 onLoginSubmit 발동
} else{                                                               // 유저이름이 로컬저장소에 저장되었다면
    const getUserName = localStorage.getItem(USERNAME_KEY);           // 저장된 이름 가져오기
    afterLogin(getUserName);
}
logout.addEventListener("click",onClickLogout);                       // 로그아웃 버튼 클릭 이벤트시 발동



