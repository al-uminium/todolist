import { useState, useRef, useEffect } from 'react'

const Priority = ({ onChoose }) => {

    const [dropdown, setDropdown] = useState(false)

    // const closeDropdown = (e) => {
    //     useEffect(() => {
    //         if (Priority.current && !Priority.current.contains(e.target)) {
    //             setDropdown(false)
    //         }
    //     })
    // }

    return (
        <div>
            <div className="relative inline-block" onClick={() => setDropdown(!dropdown)}>
                <input type="button" id="priority" className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 transition duration-200 rounded-xl p-1 mr-1 text-white" value="Priority" />
                <div className={dropdown ? "dropdown-content absolute" : "hidden dropdown-content absolute"} >
                    <div className="flex flex-col bg-gray-50 rounded">
                            <ul id="high" className="hover:bg-gray-200" onClick={onChoose}>
                                <p className="text-red-600">!!!!</p> High Priority
                            </ul>
                            <ul id="med" className="hover:bg-gray-200"  onClick={onChoose}>
                                !!! Medium Priority
                            </ul>
                            <ul id="low" className="hover:bg-gray-200"  onClick={onChoose}>
                                !! Low Priority
                            </ul>
                            <ul id="no" className="hover:bg-gray-200"  onClick={onChoose}>
                                ! No Priority
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Priority
