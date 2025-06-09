import React from 'react'

const MapObjectExam = () => {

    let members = [
        {id:1, name:'박수현', age:25, gender:'W'},
        {id:2, name:'류이수', age:30, gender:'M'},
        {id:3, name:'임명진', age:35, gender:'M'},
    ];

    let result = members.map((member) => {
        return (<div key={member.id}>{member.id}.{member.name} - {member.age}({member.gender == 'W' ? "여" : "남"})</div>);
    })

    return (
        <div>
            {members.map((member)=> (
                <div key={member.id}>{member.id}.{member.name} - {member.age}({member.gender == 'W' ? "여" : "남"})</div>
            ))}
            <hr/>
            {result}
        </div>
    )
}

export default MapObjectExam