const rules = {
  email: [
    {
      type: 'required',
      value: true,
      message: 'E-mail не может быть пустым'
    },
    {
      type: 'email',
      value: true,
      message: 'Введите действительный адрес электронной почты'
    }
  ],
  phone: [
    {
      type: 'required',
      value: true,
      message: 'Номер телефона не может быть пустым'
    },
    {
      type: 'phone',
      value: true,
      message: 'Проверьте выбранную страну, формат записи номера и количество символов'
    }
  ],
  card_number: [
    {
      type: 'required',
      value: true,
      message: 'Номер карточки не может быть пустым'
    },
    {
      type: 'minLength',
      value: 16,
      message: 'Номер карточки должен быть не короче 16 символов'
    },
    {
      type: 'maxLength',
      value: 19,
      message: 'Номер карточки должен быть не длиннее 19 символов'
    },
    {
      type: 'creditCard',
      value: true,
      message: 'Введите действительный номер карточки'
    }
  ],
  name: [
    {
      type: 'required',
      value: true,
      message: 'Имя не может быть пустым'
    },
    {
      type: 'minLength',
      value: 2,
      message: 'Имя должно быть не короче 2 символов'
    },
    {
      type: 'maxLength',
      value: 45,
      message: 'Имя должно быть не длиннее 45 символов'
    },
    {
      type: 'alpha',
      value: true,
      message: 'Имя должно быть написано латиницей без знаков препинания'
    }
  ],
  term: [
    {
      type: 'required',
      value: true,
      message: 'Срок действия не может быть пустым'
    },
    {
      type: 'minLength',
      value: 7,
      message: 'Срок действия должен быть не короче 4 символов'
    },
    {
      type: 'maxLength',
      value: 7,
      message: 'Срок действия должен быть не длиннее 4 символов'
    },
    {
      type: 'afterToday',
      value: true,
      message: 'Дата не может быть раньше, чем сегодняшняя'
    },
  ],
  cvv: [
    {
      type: 'required',
      value: true,
      message: 'CVV не может быть пустым'
    },
    {
      type: 'minLength',
      value: 3,
      message: 'CVV быть не короче 3 символов'
    },
    {
      type: 'maxLength',
      value: 3,
      message: 'CVV быть не длиннее 3 символов'
    },
    {
      type: 'number',
      value: true,
      message: 'CVV может содержать только цифры'
    }
  ]
}

const cardTypes = [
  {
    type: 'visa',
    values: [4]
  },
  {
    type: 'master_card',
    values: [51, 52, 53, 54, 55]
  },
  {
    type: 'maestro',
    values: [50, 56, 57, 58, 63, 67]
  },
  {
    type: 'mir',
    values: [2]
  }
]

export { rules, cardTypes };