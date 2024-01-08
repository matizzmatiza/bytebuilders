export const updateTitle = (newTitlePart) => {
    const currentTitle = document.title;
    document.title = `${newTitlePart} - ${currentTitle}`;
    return () => {
        document.title = currentTitle;
    };
};