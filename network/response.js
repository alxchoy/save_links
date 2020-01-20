function successResponse(res, data, status = 200) {
  console.log(data)

  return res.status(status).json({
    error: false,
    data,
  })
}

function errorResponse(res, message, status = 404) {
  console.log(message)

  return res.status(status).json({
    error: true,
    message,
  })
}

module.exports = {
  success: successResponse,
  error: errorResponse,
}
