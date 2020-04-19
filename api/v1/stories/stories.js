const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

// 스토리 만들기
exports.createStory = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'create' }));
};

// 여러개의 스토리 리스팅
exports.readStories = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'list' }));
};

// 특정 스토리 읽기
exports.readStory = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'read' }));
};

// 스토리 수정
exports.updateStory = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'update' }));
};

// 스토리 삭제
exports.deleteStory = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'delete' }));
};