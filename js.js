$(document).ready(function () {
	let popupOpen = false // Флаг для блокировки других функций

	// Переключение вкладок
	$('.tab-link').click(function () {
		if (popupOpen) return
		$('.tab-link').removeClass('active')
		$(this).addClass('active')
		$('.tab-content').hide()
		$('#' + $(this).data('tab')).show()
	})

	// Открытие попапа
	$('#openPopup').click(function () {
		popupOpen = true
		$('#popup').fadeIn()
	})

	// Закрытие попапа при клике на крестик
	$('.close').click(function () {
		closePopup()
	})

	// Закрытие попапа при клике на фон (затемненную область)
	$(document).click(function (event) {
		// Проверка, чтобы не закрывать попап, если клик был внутри самого попапа
		if (
			popupOpen &&
			!$(event.target).closest('#popup .popup-content').length &&
			!$(event.target).closest('#openPopup').length
		) {
			closePopup()
		}
	})

	// Переключение аккордеона
	$('.accordion-header').click(function () {
		if (popupOpen) return
		$(this).next('.accordion-content').slideToggle()
		$('.accordion-content').not($(this).next()).slideUp()
	})

	// Функция закрытия попапа
	function closePopup() {
		popupOpen = false
		$('#popup').fadeOut()
	}
})
