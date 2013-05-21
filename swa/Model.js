
guidedModel =// @startlock
{
	Person :
	{
		fullName :
		{
			events :
			{
				onLoad:function(attributeName)
				{// @endlock
					this.firstName + ' ' + this.lastName;
				}// @startlock
			}
		},
		email :
		{
			events :
			{
				onLoad:function(attributeName)
				{// @endlock
					this.email = "*****";
				}// @startlock
			}
		}
	}
};// @endlock
