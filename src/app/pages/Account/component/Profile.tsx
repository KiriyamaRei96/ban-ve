import React, { useEffect } from 'react';
import { edit } from 'asset/export';
import { useSelector } from 'react-redux';
import { userInfo } from 'app/pages/App/slice/selector';
import { Form } from 'antd';
export interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  const info = useSelector(userInfo);
  const [form] = Form.useForm();
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
          <button>
            <img src={edit.default} alt="" />
            <span>Edit</span>
          </button>
        </div>
        <div className="--infoaccount">
          <Form form={form}>
            <div className="--item-account">
              <h6 className="fs-14">Infomation of tour guide</h6>
              <div className="form_info d-flex flex-wrap justify-content-between">
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Name</label>
                  <Form.Item name="name">
                    <input type="text" placeholder="Nguyễn văn A" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Phone</label>
                  <Form.Item name="phone">
                    <input type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Email</label>
                  <Form.Item name="email">
                    <input type="text" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="--item-account">
              <h6 className="fs-14">Infomation of tour guide</h6>
              <div className="form_info d-flex flex-wrap justify-content-between">
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Nguyễn văn A" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Phone</label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column w-100">
                  <label htmlFor="">Address</label>
                  <Form.Item name="email">
                    <input type="text" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
