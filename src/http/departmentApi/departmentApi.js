import { post, get } from "../ymtIndex/ymtIndex"

const SCHOOL_BASE_URL = "department/"

const add = (data) => {
    return post(SCHOOL_BASE_URL + 'add', data)
}

const getBySchoolId = (params) => {
    return get(SCHOOL_BASE_URL + 'getDeparts/' + params.schoolId)
}

const del = (params) => {
    return get(SCHOOL_BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(SCHOOL_BASE_URL + 'edit', data)
}

const al = () => {
    return get(SCHOOL_BASE_URL + 'all')
}

const one = (params) => {
    return get(SCHOOL_BASE_URL + 'one/' + params.id)
}

const allSchool = () => {
    return get('school/all')
}

const allDepart = () => {
    return get('department/all')
}

const allMajor = () => {
    return get('major/all')
}

export {
    al,
    edit,
    del,
    getBySchoolId,
    add,
    one,
    allSchool,
    allDepart,
    allMajor
}