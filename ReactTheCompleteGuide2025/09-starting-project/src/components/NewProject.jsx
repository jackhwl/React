import { useRef } from "react";
import Input from "./Input.jsx";
export default function NewProject({onAdd}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex item-center justify-end gap-4 my-4">
                <li><button className="py-2 text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Title" id="title" className="w-full px-4 py-2 border border-stone-700 rounded-md" />
                <Input ref={descriptionRef} label="Description" textarea id="description" className="w-full px-4 py-2 border border-stone-700 rounded-md" />
                <Input type="date" ref={dueDateRef} label="Due Date" id="due-date" className="w-full px-4 py-2 border border-stone-700 rounded-md" />
            </div>
        </div>
    );
}
