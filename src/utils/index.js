export const btnLoadStyle = (url) => {
    if(url && url.indexOf("launches") !== -1){
        if(url.indexOf('launch_year') !== -1){
            var year1 = url.substr(url.indexOf('launch_year=')+12, 4);
            var btn1 = document.getElementById(`${year1}_idx`);
            addbtnstyle(btn1, "#28a745", "#fff");  
        }
        if(url.indexOf('launch_success') !== -1){
            var launch1 = url.substr(url.indexOf('launch_success=')+15, 4);
            var id = launch1 === "true"? "btnlaunch_true" : "btnlaunch_false";
            var btn2 = document.getElementById(id);
            addbtnstyle(btn2, "#28a745", "#fff");              
        }
        if(url.indexOf('land_success') !== -1){
            var land1 = url.substr(url.indexOf('land_success=')+13, 4);
            var id2 = land1 === "true"? "btnland_true" : "btnland_false";
            var btn3 = document.getElementById(id2);
            addbtnstyle(btn3, "#28a745", "#fff"); 
        }
    }
}

export const getbtndata = (btns) => {
    Array.from(btns).forEach(element => {
        addbtnstyle(element, "#69be28", "#000");
    });  
}

export const addbtnstyle = (btn, bcolor, color) => {
    btn.style.setProperty("background-color", `${bcolor}`, "important"); 
    btn.style.setProperty("color", `${color}`, "important"); 
}