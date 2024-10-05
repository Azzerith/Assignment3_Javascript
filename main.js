function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];
    // let tahun = studentId.slice(0, 4)
    if (studentId.slice(4, 6) === '21') {
        prody = facultyList[0][1]
    } else if (studentId.slice(4, 6) === '22') {
        prody = facultyList[1][1]
    } else if (studentId.slice(4, 6) === '23') {
        prody = facultyList[2][1]
    } else if (studentId.slice(4, 6) === '31') {
        prody = facultyList[3][1]
    } else if (studentId.slice(4, 6) === '32') {
        prody = facultyList[4][1]
    } else if (studentId.slice(4, 6) === '33') {
        prody = facultyList[5][1]
    } else if (studentId.slice(4, 6) === '41') {
        prody = facultyList[6][1]
    } else if (studentId.slice(4, 6) === '42') {
        prody = facultyList[7][1]
    } else if (studentId.slice(4, 6) === '51') {
        prody = facultyList[8][1]
    } else if (studentId.slice(4, 6) === '52') {
        prody = facultyList[9][1]
    } else if (studentId.slice(4, 6) === '53') {
        prody = facultyList[10][1]
    } else {
        return "Invalid Student's ID"
    }
    facultyList.forEach(facultyPrody => {
        if (prody === facultyPrody[1]) {
            faculty = facultyPrody[0]
        }
    })

    let lecturerName = getLecturer(prody)

    return data = {
        id: studentId,
        name: name,
        prody: prody,
        faculty: faculty,
        thesisLecturer: lecturerName
    }; // TODO: replace this
}

function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];

    lecturerList.forEach(lecturerName => {
        if (prody === lecturerName[1]) {
            lecturer = lecturerName[0]
        }
    })
    return lecturer;
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};