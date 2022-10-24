import React, { useState } from "react";
import axios from "axios";
import "../css/NewBoard.css";


function NewBoard(){
    // const [Id, setId] = useState("");
    const [Name, setName] = useState("");

    const create = () => {
        let data = {
            name: Name
        };
        axios({
            url: "http://localhost:8050/gallery/add",
            method: "post",
            data : data
        }).then((result) => {
            console.log(result.data);
    
            if(result.data.code === 200){
                alert("갤러리 생성이 완료됐습니다!")
                window.location.replace("/게시판링크")
            }
            else{
                alert("갤러리 생성에 실패했습니다.")
            }
        }); 
    };
    const checkBoardName = () => {
        let data = {
            name : encodeURI(Name)
        }
        axios({
            url: "http://localhost:8050/gallery/check",
            method: "get",
            data : data
        }).then((result) => {
            console.log(result.data)
            if (result.data.code === 400){
                alert("이미 존재하는 갤러리이름입니다.")
            }
            else if (result.data.code === 500){
                alert("서버상 문제가 발생했습니다")
            }
            else alert("등록 가능한 갤러리 이름입니다!")
        })
    }
    return (
        <>
            <div className="newBoardBox">
                <div className="theContent">
                    <div className="newBoardTitle">
                        <h2>갤러리 생성하기</h2></div>
                        <hr></hr>
                        <br></br>
                        <div>갤러리 생성 규칙 </div>
                        <br></br>
                    <span>갤러리 제목 : </span>
                    <input  className="boardName" placeholder="만들고자 하는 갤러리 제목을 입력해주세요" onChange={(e)=>{setName(e.target.value);}}></input>
                    <button className="checkBtn" onClick={checkBoardName}>중복확인</button>
                    <br></br>
                    {/* <input placeholder="갤러리 제목을 입력해주세요"></input>   */}
                    <button className="createBtn" onClick={create}>갤러리 생성</button>
                </div>
            </div>
        </>
    );
}

export default NewBoard;