import React from 'react'

const MemberInfo = ({teamNm, name}) => {
  let divStyled = {
    // display:"flex",
    // justifyContent:"center",
    // alignContent:"center",
    // flexDirection:"column",
    // textAlign:"center",
    // width: "100px",
    // height: "200px",
    // border: "1px solid skyblue",
    // backgroundColor: "#edffff",
    // borderRadius: "10px",
    // float:"left",
    // margin:"10px"
  };

  return (
    <div className='team-info' style={divStyled}>
      <p>{teamNm}</p>
      <p>{name}</p>
    </div>
  )
}

export default MemberInfo