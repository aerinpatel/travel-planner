let count = 0;

function addit(){
    let title = document.getElementById("main-box");
    let discr = document.getElementById('discription');
    let arrival = document.getElementById('arrival');
    let going = document.getElementById('going');


    let dis = document.createElement('div');
    let box = document.createElement("div");
    let atime = document.createElement('div');
    let gtime = document.createElement('div');

    dis.innerText = discr.value;
    box.innerText = title.value;
    atime.innerText = arrival.value;
    gtime.innerText = going.value;

    // console.log(dis.innerText);
    // console.log(atime.innerText);
    // console.log(gtime.innerText);
    // console.log(box.innerText);
    let thing = document.createElement('div');
    thing.append(box);
    thing.append(dis);
    thing.append(atime);
    thing.append(gtime);
    thing.id = 'thing'+count;
    count++;
    // console.log(thing);
    let list = document.getElementById('plan');
    list.append(thing);

    // console.log(title);
}