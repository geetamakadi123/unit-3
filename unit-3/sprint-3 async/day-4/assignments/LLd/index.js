
class meeting {


            #size;
            #purpose;
            #roomNum;


constructor( size, purpose,roomNum) {

    this.#size = size
    this.#purpose = purpose
    this.#roomNum = roomNum

}

get roomNum() {

    return `F ${this.#roomNum}`
}

get size(){

    return this.#size
}

}


// small size,large size

//super, extends

class small extends meeting {

constructor(purpose, roomNum) {

    super('small', purpose, roomNum)
}

}


class large extends meeting {

constructor(purpose, roomNum) {

    super('large', purpose, roomNum)
}

}


class rooms {

#floors;

constructor(roomNumber) {

    this.#floors = []
    this.roomNumberOfFloors = roomNumber

    for (let i = 0; i < roomNumber; i++) {

        this.#floors[i] = new meetingfloor(i, roomNumber)

    }

}

findSlot(size) {


    for (let i = 0; i < this.roomNumberOfFloors; i++) {

        //Iterating through slots

        for (let slot of this.#floors[i].roomspace) {

            if (slot.size === size && !slot.isBooked) {

                return { floorroomNumber: i, slot: slot }

            }

        }


    }


    return false;
}


meetingrooms(meeting) {


     let li = this.findSlot(meeting.size)

     li.slot.book= true
  
    

}
}


class meetingfloor {

#floorroomNumber;

constructor(floorroomNumber, maxFloor) {

    this.#floorroomNumber = floorroomNumber
    this.roomspace = []

    for (let i = 0; i < maxFloor; i++) {

        //Depending on floorroomnumber push  the meeting

        if (i === 0) {

            this.roomspace.push(new Slot('large', i))
        }
        else if (i == 1) {

            this.roomspace.push(new Slot('large', i))

        }
        else {
            this.roomspace.push(new Slot('samll', i))


        }


    }



}


}



class Slot {

    #isBooked;

constructor(size, roomNumber) {

        //roomnumber -> floorroomnumber
        this.roomNumber = roomNumber
        this.size = size
        this.#isBooked = false

}

get isBooked(){

    return this.#isBooked
}


set book(bool)
{

this.#isBooked = bool
}
}


let q = new rooms(6)
console.log('p:', q)

let c1 = new large('Theater style',04)

let b1 = new small('Team style',06)



q.meetingrooms(c1)

