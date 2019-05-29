
    $scope.search = function () {

        const body = {
			location: $scope.location,
			name: $scope.subject,
			level: $scope.level
		};

		return fetch('http://localhost:4000/search', {
			method: 'post',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				$scope.people = data;
				$scope.$apply();
				return data;
			})
			.catch((err) => console.log(err));

    };

	$scope.search();
