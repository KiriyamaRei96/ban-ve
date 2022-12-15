import React, { useEffect, useState } from 'react';
import { changePass, edit } from 'asset/export';
import { useSelector } from 'react-redux';
import { userInfo } from 'app/pages/App/slice/selector';
import { Form } from 'antd';
import { Modal } from 'react-bootstrap';
import ChangePass from 'app/pages/App/component/ChangePass';
export interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  const info = useSelector(userInfo);
  const [form] = Form.useForm();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (info)
      form.setFields(
        Object.entries(info).map((value, index) => {
          return { name: value[0], value: value[1] };
        }),
      );
  }, [info]);
  return (
    <div className="col-md-9">
      <div className="info-accounuser">
        <div className="--top d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold">Profile</h5>
          <div className="btn-wrapper d-flex">
            {/* <button>
              <img src={edit.default} alt="" />
              <span>Edit</span>
            </button> */}
            <button onClick={() => setOpen(true)}>
              <img src={changePass} alt="" />
              <span>Thay đổi mật khẩu</span>
            </button>
          </div>
        </div>
        <div className="--infoaccount">
          <Form form={form}>
            <div className="--item-account">
              <h6 className="fs-14">Organization</h6>
              <div className="form_info d-flex flex-wrap justify-content-between">
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Name</label>
                  <Form.Item name="name">
                    <input
                      readOnly={true}
                      type="text"
                      placeholder="Nguyễn văn A"
                    />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Phone</label>
                  <Form.Item name="phone">
                    <input readOnly={true} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Email</label>
                  <Form.Item name="email">
                    <input readOnly={true} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column w-100">
                  <label htmlFor="">Address</label>
                  <Form.Item name="address">
                    <input readOnly={true} type="text" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Modal centered show={open} onHide={() => setOpen(false)}>
        <ChangePass setModal={setOpen} />
      </Modal>
    </div>
  );
};
export default Profile;
