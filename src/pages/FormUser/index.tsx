import { useState } from "react";

const provinces = [
    { name: "Chọn Tỉnh/Thành", districts: ["Chọn Quận/Huyện"] },
    { name: "TpHCM", districts: ["Q.Tân Phú", "Q.Tân Bình", "Q.Bình Tân"] },
    { name: "Đồng Nai", districts: ["Tp Biên Hòa", "H.Lòng Thành", "H.Xuân Lộc"] },
];

const educations = ["Đại học", "Cao đẳng", "Trung cấp"];
const specializeds = [
    { name: "Chọn Chuyên ngành", jobs: [] },
    { name: "Công nghệ thông tin", jobs: ["Frontend Developer", "Backend Developer"] },
    { name: "Kinh doanh dịch vụ", jobs: ["Giám đốc kinh doanh", "Nhân viên kinh doanh"] },
];
const fields = ["Thương mại", "Dịch vụ", "Sản xuất"];
function FormUser() {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        province: "",
        district: "",
        hometown: "",
        year: 1900,
        education: "",
        specialized: "",
        job: "",
        field: "",
    });

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Xử lý dữ liệu hoặc gửi dữ liệu lên server tại đây
        console.log("User data:", userData);
    };

    return (
        <div className="container">
            <h2 className="d-flex justify-content-center mb-">User Information Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="row g-3">
                    <div className="mb-3 w-50">
                        <label htmlFor="firstname" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            value={userData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 w-50">
                        <label htmlFor="lastname" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            value={userData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="province" className="form-label">
                            Nơi ở hiện tại:
                        </label>
                        <select
                            id="province"
                            className="form-select"
                            onChange={handleChange}
                            name="province"
                            value={userData.province}
                        >
                            {provinces.map((province) => (
                                <option key={province.name} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="district" className="form-label">
                            Quận/Huyện:
                        </label>
                        <select
                            id="district"
                            className="form-select"
                            onChange={handleChange}
                            name="district"
                            value={userData.district}
                        >
                            {provinces.map((province) =>
                                province.name === userData.province
                                    ? province.districts.map((district) => (
                                          <option key={district} value={district}>
                                              {district}
                                          </option>
                                      ))
                                    : ""
                            )}
                        </select>
                    </div>
                </div>
                {/* Quê quán */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="hometown" className="form-label">
                            Quê quán:
                        </label>
                        <select
                            id="hometown"
                            className="form-select"
                            onChange={handleChange}
                            name="hometown"
                            value={userData.hometown}
                        >
                            {provinces.map((province) => (
                                <option key={province.name} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="year" className="form-label">
                            Năm sinh:
                        </label>
                        <input
                            type="number"
                            min="1900"
                            max="2099"
                            step="1"
                            value={userData.year}
                            id="year"
                            name="year"
                            className="form-select"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Học vấn */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="education" className="form-label">
                            Trình độ học vấn:
                        </label>
                        <select
                            id="education"
                            className="form-select"
                            onChange={handleChange}
                            name="education"
                            value={userData.education}
                        >
                            {educations.map((education) => (
                                <option key={education} value={education}>
                                    {education}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="specialized" className="form-label">
                            Chuyên ngành:
                        </label>
                        <select
                            id="specialized"
                            className="form-select"
                            onChange={handleChange}
                            name="specialized"
                            value={userData.education}
                        >
                            {specializeds.map((specialized) => (
                                <option key={specialized.name} value={specialized.name}>
                                    {specialized.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="specialized" className="form-label">
                            Chức danh:
                        </label>
                        <select
                            id="job"
                            className="form-select"
                            onChange={handleChange}
                            name="job"
                            value={userData.job}
                        >
                            {specializeds.map((specialized) =>
                                specialized.name === userData.specialized
                                    ? specialized.jobs.map((job) => (
                                          <option key={job} value={job}>
                                              {job}
                                          </option>
                                      ))
                                    : ""
                            )}
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="field" className="form-label">
                            Lĩnh vực:
                        </label>
                        <select
                            id="field"
                            className="form-select"
                            onChange={handleChange}
                            name="field"
                            value={userData.field}
                        >
                            {fields.map((field) => (
                                <option key={field} value={field}>
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormUser;
