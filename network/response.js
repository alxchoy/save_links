function successResponse(res, data, status = 200) {
  console.log(data)

  return res.status(status).json({
    error: false,
    data,
  })
}

function errorResponse(res, error, status = 404) {
  console.log(error)

  return res.status(status).json({
    error: true,
    message: error instanceof Error ? error.message : error,
  })
}

module.exports = {
  success: successResponse,
  error: errorResponse,
}
