// // const txt1 = document.getElementById("searchingInfo");
// // const output1 = document.getElementById("displayInfo")
// let data = 
//     [
//         {
//             id: 1,
//             danhGia: 10,
//             name: "Hồ Văn Hiếu",
//             url: "https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg",
//             desc: "Always keep your passion on fire "
            
//         },
//         {
//               id: 2,
//               danhGia: 10,
//               name: " Nguyễn Thị Hoài Linh",
//               url: "data:image/jpeg;base64,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",
//               desc: "Spare the rod, and spoil the child. "
//           },
//           {
//             id: 3,
//             danhGia: 8,

let data = 
    [
        {
            id: 1,
            danhGia: 10,
            name: "Hồ Văn Hiếu",
            url: "https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg",
            desc: "Always keep your passion on fire "
            
        },
        {
              id: 2,
              danhGia: 10,
              name: " Nguyễn Thị Hoài Linh",
              url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAEHAgj/xAA9EAACAQMDAgMFBgMGBwEAAAABAgMABBEFEiExQQYTUSIyYXGBBxQjkaGxQnLBNFJiwuHwFTU2orLR8TP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAeEQACAgMBAAMAAAAAAAAAAAAAAQIRAxIhMSJBUf/aAAwDAQACEQMRAD8AXrWZ94DyOfhuNGoQGTJFArK3llZSB0o6W+7wj1rpvvBlz0lhhDnDMBXi9gMABRgR3qD7wsg3BwDTRpHhabUh5U12ImKbseWW2/A9Bnntml1kG0KahyclsfWpw+0YYE/MUH8Yzros95pzXqLdxELlVchs4Jwcen5GkeLU72KcSW91Ifn3+nenOSR0K+coAyMw5rSXbmPnkkYzUWk3Z1Cw3XNvcmcpwiWp94dec89vTpSpeP4gklaV7eWONCCu6EICO2M1zujtRtspnEzFmZgT3NGFwyZA696WNKv47pokV0Fw4yYuhz3pgTzFUKwxSt0dRG1tI024SMB6ZqZ4fZzuPT1q0zqsW3HNVV3hSeoNcpNh1VFBUYyZ81x8MmrCS/iYc8V6MS7twyDVKTJf5VW7J1QQkmGMIBWVWllUQggc1lLqg2V9OZlRXUj41aunaQY6E+lULeFIwAZDmjFmqqN0nI7Zqa9Gb4VLK2t4rmA3UojjMqhmZsADNU/GfjqS7uJ9L8PSOVlYiSUAjcM5wDnIAx1pX8Vau93qckaNi3gJCAj+IcZobaOLSPeUV5XGW3HpVLASNZOWJeNpZGOWcjqfrXvEsAykUijvgKv7D+tVnuXc8bgfg9axM/V5D8zRGTLI1CaGQNE0igds5pht9XWaxRxgTRe8pb31+HNLlhpl3qU4itV3Ee8x6LRObwtqdv7hRx8Dgikckh0m0Hkn0G+Cm5t9shGPMi4YcYzmmxLEz2XnWlx96VBzkYfb2JHTpxxXMU8Oaz70cDMB1xRDTNe1bw/eLDMSo4/DfoR8K60wNNDbtMoOW5xxUEAmjc7uVzVi2db5Uu7fHlTAnj+Fu6/79RU7WkioWLAihslwV3do02CvGOlVDZ+1ktgGrMUTFcqcqKy4kRlVScba63fAtJlO5iwCo5UdDWV6aRSxUnit03RWgBLOIwNxO4elTwXzyYBYhRQ2RmdN22vdo7yYDAKKUQWLkBtRnYjIWRiw+tVpSSxbvRnXNO+53pljB8mdSc+jdxQc5LAH1pkEns4GmkVE940+6T4GWaIPd3bFWGdqDH5ml3QraP7yjImZK6vYI0dqiuMHHSpZJteFsUb9ItP0Wy0+2EVrGFXucck/Gop4VRgcUSeaNOHYL9KhmEcoO1lbHcEGs/WaE0uFeOZoxhcAd6VfG1il3ZtcBR58OWBx1HcU2Rqh34YZ5wT04xQjXHtpEkhE8ZdwVC7s9qaLaYJpNCb4E1SRb6Wykc+W6l1BPAYdf0/am+61A+5mkLwXZs+qNO+R93U7ue5yMH9fypov2CtlPrWnVNmXagul0oh4/ehkj75SynPNUo3mnPlrnB9KL2Wl+XDumf2jRcoY/QdkV5SoIbHJrKtS2YkIAIyK3XLLD9OcWJyOVj5yRXtZ+QF4qGCTeGB6V5iYxyAbcjPc0EIFZLebUrSSBG9vAZAP4iCPZ+opd1fRrzSmja7CYkJ2sjbgcdeadPDNq2o6rbxx4Ta292I4VRyfz6fWrnj6CCfTLS3ihjMoZnWTA9lMZxn8uKWUqaLQgnFlH7NIQ/3iVgCeFUntT9txz2HXFJn2exeVazHAGCARTxEd2AOvpUJv5F8aqIva7qltaWU8jQNIqEK5XAHPQDPX6VR0mJdQKiGExA8lc5Pr1pqv0jMJEkSufRhmqmj2/lu7BdpPRQOgo7IagN4n83T4bSKL3ZNwY4z3z+fNK4jMF66Gxd2wrCVZCRyAfTGRntXRNXs0urGQZBdeVPowpZimd12khW7tQUqOqwZ4TtlWLUHJCmW5fjHOAauS2Dyzbd3snvUFmyHUtQjtz+H5qH5MVGaLtL5C5bHzqksmseGdpWajtIrRBjAPrVa+1BYxgE5qK5v0J5bNA7q7iV2Zm3E9hWWnJ2xm0kFlvGRg7NgGsoCLzzgcVun0Fsowl14DfSp4jEpJkzuPY1HHGQdxbB7jBrZ8tpB/ET3Ga2EaOj/Z3Cy6bqmoMinZHsjwO45P+UVuFIdXgu7RWAntX8iRSfQ5U/keD9KKeBbZj4IjTDI91O2D/h3Bf8prl/ijWr/QPHWsyabMI2kcBgUBUjAxx/vrRnC4jY8msmNugWsunXt3bzDA3nB9fQ/lTKpYLlaRPBPiafWLq4t9SdDcn8SNlGNw7jHwp4j6AVknFp9NcWmuEsA3v+IvHxqByxkkZAdi9l6mrXuRs3oM0sLrNxcMECG3gYndJJ7P6dT/AK1yQxLeaxfxWFxutraMjlY45MsvxYmgSSyvCfNKAlQ2U6Z9RWXU2mZmD3k0snIwq45P60KUy7HSJy8boyr7XTIp9bBs0FbXybeFJbY+YJ2Lu/cn/wCftXrVblii7TihXg+9VfvNjJyI23J8vSrWoym4lxHgAUciMr9sHSyPnG7qKFSyMZGJwDnpRgomPVh1zQ/ULXbEZQDj1pYvoPTduyrHufjNZQ6GQyALk+yK1TPGEZzb71OYiD+lV7uBUtWcOzsepJzTfPBbNCdq5+leBZ209oYpBgYoqRzjwdvBa+T4J0Q4zm3EgHz3Y/fNcJ8eTpdeMdVljGFMwUfRQP6V9DXKR6NoUaRKFS1tAsanoAAAK+ZtWcyancP1LSsc/WtUn9EIL7PWitKmr2TWzlJBMCCP1/TNdzik3IrdARnNcZ8HwNceI7NVGVj3O3wG0/1Irs9oAIgD2FZc3psw+EjTAxlRySMfOqD2kQBdowz564/ark1vGy7uh9RVK4nktoieGwKjZYEX1vOS223QKf8AFz9aUdXv47GVRvG+M79i92x7I+HqaJTeJJr/AFZdOtoPxGfa8jHgDvgUo+JNOu9O1Gf70rsskhaOU9HU/wBa0Y4P1kcs+UjxolybfVI5Nx9vIZsdc0zukpuCwU4NJUT7SrDgg8V1zRwl9YW9wqLtdAfrTyepFLYWvukrHeqtk/Crhs2ltXjkQquPSmdoFHAUflXj7uW47VGTTGUaOYfdxBNOhDcdDWUb8UWrw334SH2hyQKyqxaaA0x5trGXywDjPrUsGiyzXKRhiN7AcfGikIXGaI6Vhr+AD++Kxxk7Gl4T+NcjTZ41JG5VUfAAf6V80agMahMM5AkbmvpbxfFJfSNbWyMzFGJx2GOp9Oprn/gD7MNP8Sf8Rv8AXLi4CQ3jQxwW7hQcAEljgnv2xW6/kSXIg77P9IitdBi1RkzcXsjcntGpIAHzIz+VOcJAQ03ReENDitbaytpJIoYR5cUaSr88cjJPU1LJ4T0yOMl57hUA5YyKAP0qeSLkysMkYqmKSsCpzQDxTeR2dhNI3RFJx3rph8K6YhVXuLgFjtUNIvJxnA4+BobrH2Z6LrEXlXV1qKpnJEcqDP8A21NYnfR3mjRxj7PbF5JLrVply7tsjP6sf2H0p7k0u31W3NtfRLLC/VSOnxHofjTlpPgHQ7GxitrKa5aGLKg+apyc85OOuc0Sj8LWEfuyXH1Yf+q2KUUQ2OEar9k2rRTk6NPb3UBOUWV/LkHw6YPbnI+Qpo8JaDrGh6clpr1obdmy0P4ivx3BIJwe/wBa6vHpFpHIdk8oZByA44/SpZ8W5SN23pICMSc0k0pqjoyo58bdSeOKz7sB1I/KmbUdEG5p7Bd0feMdV+VA2I5BGMVinFxdFU7B8thbudzorH4isq2Wj/vCspNmEqwy5UUw+GrSeS7W5aM+SnRyOM/D9aWE6Cm6x/sFv/KKfFFbCT8J/EGoLa2s6xACWQ4yOuOlL32bRveeEfEVjazhLpr64jDBiNjMi4ORyPmOa1rH9pj/AJ1/cVX+yr/qPXfmv/k1bW+E64NFhp13HqETw6ZDZWqPEfL2Qhl2q4OCvVRkYzzyaoav/wAQvb+70yG5leaQyhkSZNixlDs9k8qQSvJ4JPfoHf8AhrO1AUUNS0vXHvo/JkMttDOxgeQJI6f/AJkMcsvAIk9e3B4wS1a21l76RdNnCW8kJdWYj2JVVgFwezFkb0Hltn3qOis9a44R7dNQtVEOntLbrdTmGCCV0ZlXYFkk9kYyjLnn1x3ABbWNOv31Lz7B7ld9ssPmJMB5ZDgk7W4JKk84PIpi9fpWHt8644TdU0bVZ5roQCeRsOIpZJ12PGIyI0IPJO8kndkdeegBPxRMY5LUKefaPHpxTAKSfEn/ADdv5aMfQoy01ma3fb1XPerE0UGuRO8QCXag8jgSfP40uye+av6J79HIk49QfAW6FGIfgjqCK3Umrf22X+c1lee+Msun/9k=",
              desc: "Spare the rod, and spoil the child. "
          },
          {
            id: 3,
            danhGia: 8,
            name: "Huynh De Thu",
            url: "data:image/jpeg;base64,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",
            desc: "keep working hard day by day "
        },
       
      
     ]
     document.getElementById("logOut").onclick = function(){
        window.location.href="../logIn/index.html"
    }
    
    function renderTable(displayInfo){
        let result = 0;
      document.getElementById("resultTable").innerHTML =`
        <tr class="bg-primary text-white fw-bold">
        <td>id </td>
        <td>Chất lượng giảng dạy</td>
        <td>Ten </td>
        <td>Châm Ngôn dạy   </td>
        <td>Hình Ảnh</td>
        </tr>
      `
      
        if(displayInfo == ""){
            document.getElementById("displayInfo").innerHTML = "Hong có giáo viên này trong cơ sở dữ liệu"
            document.getElementById("displayInfo").style.textAlign= "center"
        }else{
            displayInfo.map(function(e){
                
                document.getElementById("resultTable").innerHTML += `
                <tr>
                <td>${e.id}</td>
                <td>${e.danhGia}</td>
                <td>${e.name}</td>
                <td>${e.desc}</td>
                <td><img src=${e.url} class="w-50 "/></td>
                </tr>
                `
            })
        }
        console.log(data);
    }
    
    
   
   
     function searching(){
         var searchingResult = document.getElementById("searchingInfoOne").value;
         console.log("get data: ", searchingResult);
       let check = data.filter(valueTwo => valueTwo.name.includes(searchingResult) === true);
       renderTable(check);
       console.log("get data 1: ", check);
       
     }
    // })
    