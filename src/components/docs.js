import React, {useState, useEffect, useRef} from 'react'
import ModalComponent from './Modal'
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

export default function Docs({database}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('');
    const collectionRef = collection(database, 'docsData');
    const isMounted = useRef();
    const [docsData, setDocsData] = useState([]);
    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
        .then(() => {
            alert('Data Added');
            handleClose();
        })
        .catch(() => {
            alert('Cannot add data')
        })
    };
    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            // console.log(data.docs.map((doc) => {
            //     return {...doc.data(), id: doc.id}
            // }))
            setDocsData(data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
    };
    useEffect(() => {
        if(isMounted.current) {
            return;
        }
        isMounted.current = true;
        getData()
    }, [])

    return (
        <div className='docs-main'>
            <h1>Docs Demo</h1>
            <button className='add-docs' onClick={handleOpen}>
                Add a new document
            </button>
            <div>
                {docsData.map((doc) => {
                    return (
                        <div>
                            <p>{doc.title}</p>
                        </div>
                    )
                })}
            </div>
            <ModalComponent
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />
        </div>
    )
}