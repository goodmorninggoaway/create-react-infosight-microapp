const initialState = {
  servers: null,
};

const ACTION_HANDLERS = {};

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
