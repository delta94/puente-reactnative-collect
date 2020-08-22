import React from 'react';
import { Picker } from 'native-base';

const listLanguage = [
  {
    key: 'en', label: '🇺🇸'
  },
  {
    key: 'es', label: '🇩🇴'
  }
];

const LanguagePicker = (props) => {
  const { language, onChangeLanguage } = props;
  return (
    <Picker
      mode="dropdown"
      iosHeader=""
      style={{ width: undefined, height: 40, }}
      selectedValue={language}
      onValueChange={onChangeLanguage}
    >
      {listLanguage.map((lang) => <Picker.Item key={lang.key} value={lang.key} label={lang.label} />)}
    </Picker>
  );
};

export default LanguagePicker;
