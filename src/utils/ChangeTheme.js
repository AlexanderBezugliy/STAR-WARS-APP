

export const ChangeTheme = (theme) => {
    const root = document.querySelector(':root');
    
    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`);

    const themeVariables = ['header', 'bgimage'];

    themeVariables.forEach(element => {
        root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
    })
}
