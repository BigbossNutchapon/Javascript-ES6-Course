//Block Scope (let/constant)
    //เลิกใช้ var เพราะมันเข้าถึงได้หมด อาจเกิดข้อผิดพลาด

//Arrow Function
    //แบบใหม่
    //name function = (paras) => การทำงาน return
    //fullname=(fname,lname)=>fname+lname
    // fullname=(fname,lname)=>fname+lname
    // console.log(fullname("Big","Boss"))

    // const usernname = "Nutchapon"
    // const age = 25
    // const address = "กรุงเทพมหานคร"

//Object
    // const customer = {
    //     customerName : usernname,
    //     age,
    //     address,
    //     showData(){
    //         console.log("ข้อมูลลูกค้าชื่อว่า " + this.customerName)
    //     }
    // }
    // customer.showData()

//String
    //ใช้ ` เพื่อขึ้นบรรทัดใหม่
    // ${name} ใส่ใน String เพื่อแทรกข้อมูล

//Spread Operator
    //ใช้ ...
    // const newArr = [100,200,300]
    // const data = [10,20,...newArr]
    // console.log(data)
    //output=> [10, 20, 100, 200, 300]

    //หรือใช้ .push(...nameArr)

//Rest Parameter
    //ใช้ ... เหมือนกัน เพื่อให้ paras เป็นแบบ Arr สามารถส่ง paras กี่ตัวก็ได้
    // summation = (...numberArr)=>{
    //     let total = 0
    //     for(let number of numberArr){ total += number}
        
    //     return total
    // }
    // console.log(summation(5,5,10))
    // console.log(summation(5,5,10,500))
    // console.log(summation(5,5,10,500,700))

//Destructuring
    // const color = ["เขียว","แดง","เหลือง"]
    // const [green,red,yellow] = color

    // const product = {
    //     productName : "คอมพิวเตอร์",
    //     price : 3000,
    //     stock : 10
    // }
    //ดึงข้อมูล
    // const {productName:n,price:p,stock:s} = product

    // console.log(n)

//Default Parameter
    //ใส่ (para = "default para")

//method Arr push, pop, shift, unshift, splice, slice
    //.push(data) => add data
    //.pop() => remove last data
    //.shift() =>remove first data
    //.unshift(data) => add data in first
    //.splice(start,num of delete,add data and replace)
    //.slice(start,end-1)

//Loop Array
//For loop, ForEach, ForOf

    // const data = [10,20,30,40,50]

    // for(let i = 0; i < data.length; i++){
    //     if (data[i]>=30) break
    //     console.log(`ลำดับที่ ${i} = ${data[i]}`)
    // }

    //ForEach ใช้ break & continue ไม่ได้
    // data.forEach(e => {
    //     console.log(`สมาชิกใน Array Data = ${e}`)
    // })

    //สามารถใช้ break & continue ได้
    // for (const e of data){
    //     if(e >= 30) break
    //     console.log(`จำนวนสมาชิก Array = ${e}`)
    // }

//Array Map

    // const number = [10,20,30,40]
    // console.log(`number = ${number}`)
    // const result = number.map(e=>{
    //     return e*2
    // })

    // console.log(`Array Map = ${result}`)

    // const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]

    // const result = data.map((e,i)=>{
    //     return `วันที่ ${i+1} สภาพอากาศ = ${e}`
    // })
    // console.log(result)

    // const data = [
    //     {day:"01/06/2566",weather:"แดดร้อน",temp:27},
    //     {day:"02/06/2566",weather:"ฝนตก",temp:23},
    //     {day:"03/06/2566",weather:"หมอก",temp:18}
    // ]

    // const result = data.map(e=>{
    //     return e.weather
    // })
    // console.log(result)

//Array Filter
    // const data = [10,20,30,40]
    // const result = data.filter(e=>{
    //     return e>20
    // })
    // console.log(result)

    // const data = [
    //     {name:"บอส",salary:25000,department:"โปรแกรมเมอร์"},
    //     {name:"โจ",salary:30000,department:"การตลาด"},
    //     {name:"นัท",salary:10000,department:"เด็กฝึกงาน"},
    //     {name:"ชาเน่",salary:50000,department:"การตลาด"},
    //     {name:"บอย",salary:10000,department:"ฝึกงาน"}
    // ]

    // const result = data.filter(e=>{return e.salary > 10000}).filter(e=>{return e.department === "การตลาด"})
    // console.log(result)

//Array Reduce
    //array.reduce((ค่าที่ถูกประมวณผล,e)=>{},ค่าเริ่มต้น) // value = 0
    // const data = [10,20,30,40]
    // const summation = data.reduce((value,e)=>{
    //     const total = e + value
    //     return total
    // },0)

    //value = 0
    //total = 10 + 0
    //total = 10 + 20
    // console.log(summation)

    // const cart = [
    //     {name:"กระเป๋า",price:500},
    //     {name:"หนังสือ",price:900},
    //     {name:"กล้องถ่ายรูป",price:5000},
    // ]

    // const sum_price = cart.reduce((value,e)=>{
    //     const total = e.price + value
    //     return total
    // },0)

    // console.log(`ลูกค้าต้องชำระเงิน ราคา ${sum_price} บาท`)