import { en, vn } from 'asset/export';
import * as React from 'react';

export interface LanguageProps {}

const Language = (props: LanguageProps) => {
  return (
    <div className="language d-flex align-items-center">
      <img src={vn.default} alt="" />
      {/* <img src={en} alt="" /> */}
      <select name="" id="">
        <option value="">vn</option>
        {/* <option value="">en</option> */}
      </select>
    </div>
  );
};
export default Language;
