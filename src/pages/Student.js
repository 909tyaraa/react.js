import { useState, useEffect } from "react"
/**
 * useState -> digunakan untuk mendefinisikan state
 * useEffect -> sebuah fungsi yang dijalankan (dieksekusi) ketika
   komponennya telah ditampilkan 
 * 
 */
import { Modal } from "bootstrap";

export default function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    let [editId, setEditId] = useState(true)

    useEffect(() => {
        // inisiasi data array students
        let arrayStudents = [
            { id: 1, name: `Dito`, birthdate: `1 Mei 1900` },
            { id: 2, name: `Faiza`, birthdate: `500 SM` },
        ]
        setStudents(arrayStudents)

        // inisisasi state modalStudent
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    // function addStudent
    let addStudent = () => {
        // open modal
        modalStudent.show()

        // reset isi setiap input an
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
        setEditId(true)
    }

    // function save student
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...students]
            // add new data
            temp.push(newData)
            // store to students again
            setStudents(temp)
        } else if (action === `edit`){
            // store data student to temp
            let temp = [...students]
            // find index of selected data by ID
            let index = temp.findIndex(siswa => siswa.id === id)


            // update data on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate
            setStudents (temp)
        }
    }

    let editStudent = item => {
        // open the modal 
        modalStudent.show()
        setId(item.id)
        setName(item.name)
        setBirthdate(item.birthdate)
        setAction(`edit`)
        setEditId(false)
    }
    // isi return adalah komponen yg akan ditampilkan

    return (
        <div>
            <div className="card col-12">
                <div className="card-header bg-dark">
                    <h3 className="text-white" align="center">List of My Student</h3>
                </div>
                <div className="card-body">
                    {/*
                    .map adalah sebuah fungsi dari array untuk scanning setiap data dalam array (khusus array)

                     */}
                    {students.map(item => (
                        <div className="row" key={`key${item.id}`}>
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{item.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{item.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>Birthdate</small>
                                <h5>{item.birthdate}</h5>
                            </div>
                            <div className="col-2">
                                <small>Action</small> <br />
                                {/* edit button */}
                                {/* mx = margin horizontal */}
                                <button className="btn btn-primary mx-1"
                                    onClick={() => editStudent(item)}>
                                    Edit
                                </button>

                                {/* delete button */}
                                <button className="btn btn-danger mx-1">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* button add data */}
                    <button className="btn btn-success" onClick={() => addStudent()}>
                        Add
                    </button> 

                    {/* modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/* input for ID, Nama, Birthday */}
                                    ID
                                    <input type={`number`} className="form-control mb-2"
                                        value={id}
                                        onChange={ev => setId(ev.target.value)}
                                        readOnly={!editId} />
                                    {/* saat add student, editId = true
                                     oleh karena itu readOnly harus bernilai false

                                     saat edit student, editId = false
                                     oleh karena itu readOnly harus bernilai true dgn cara memberi tanda seru
                                     */}

                                    Name
                                    <input type={`text`} className="form-control mb-2"
                                        value={name}
                                        onChange={ev => setName(ev.target.value)} />

                                    Birthdate
                                    <input type={`text`} className="form-control mb-2"
                                        value={birthdate}
                                        onChange={ev => setBirthdate(ev.target.value)} />

                                    <button className="btn btn-info" onClick={() => saveStudent()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of modal */}
                </div>
            </div>
        </div>
    )
}