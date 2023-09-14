<script>
	export let data;
</script>

<div class="container">
	<nav>
		<ul>
			<li>
				<a href="/" style="color: orange; font-weight:bold; font-size: 2rem"> Brand </a>
			</li>
		</ul>
		<ul>
			{#if data?.profile}
				<li>
					<form action="/logout" method="post">
						<button>로그아웃</button>
					</form>
				</li>
			{:else}
				<li><a href="/login">로그인</a></li>
				<li><a href="/register">회원가입</a></li>
			{/if}
		</ul>
	</nav>
	<slot />
</div>
