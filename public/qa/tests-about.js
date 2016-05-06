suite(
     '"About" Page Tests',
     () => {
	  test(
	       'page should contain a link to the contacts page',
	       () => {
		    assert($('a[href="/contact"]').length);
	       }
	  )
     }
)
