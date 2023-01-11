type Elem = NodeListOf<Element> | HTMLElement | JQuery<HTMLElement>
declare var M
export const modalInit = (modalElem: Elem, options?: Object) => {
    return M.Modal.init(modalElem, options)
}
export const dropdownInit = (modalElem: Elem, options?: Object) => {
    return M.Dropdown.init(modalElem, options)
}
export const collapsibleInit = (modalElem: Elem, options?: Object) => {
    return M.Collapsible.init(modalElem, options)
}
export const toast = (options?: Object) => {
    return M.toast(options)
}
export const formSelectInit = (modalElem: Elem, options?: Object) => {
    return M.FormSelect.init(modalElem, options)
}