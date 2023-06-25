import {useEffect} from "react";

const useTitlecount = (talha) => {
    useEffect(() => {
        talha > 0 ? document.title = `Chats (${talha})` : document.title = `Chats`
    }, [talha]);
}

export default useTitlecount;