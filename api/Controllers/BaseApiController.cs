using Microsoft.AspNetCore.Mvc;

namespace api;

[ApiController]
[Route("api/[controller]")] // /api/users
public class BaseApiController : ControllerBase
{

}
