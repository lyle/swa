
guidedModel =// @startlock
{
	Person :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + ' ' + this.lastName;
			},// @startlock
			events :
			{
				onLoad:function(attributeName)
				{// @endlock

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
