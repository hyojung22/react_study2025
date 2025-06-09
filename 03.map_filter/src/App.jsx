/* The following line can be included in your src/index.js or App.js file 
  가장 상위에 있는 컴포넌트에 저장해라 */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MapArrayExam from './components/MapArrayExam'
import MapObjectExam from './components/MapObjectExam'
import MenuBoard from './components/MenuBoard'
import FilterExam from './components/FilterExam'
import MenuNav from './components/MenuNav'

function App() {

  return (
    <div style={{width:'100%'}}>
      {/* map() 함수 실습1 */}
      {/* <MapArrayExam/> */}

      {/* map() 함수 실습2 */}
      {/* <MapObjectExam/> */}

      {/* filter() 함수 실습 */}
      {/* <FilterExam/> */}

      {/* 실습) 음료 메뉴 출력 */}
      {/* <MenuBoard/> */}
      <MenuBoard/>
    </div>
  )
}

export default App
